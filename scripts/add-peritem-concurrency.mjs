#!/usr/bin/env node
/**
 * P2: Add perItemConcurrency to all remaining multi-operation nodes.
 */
import { readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = join(fileURLToPath(import.meta.url), '..');
const ROOT = join(__dirname, '..');
const NODES_DIR = join(ROOT, 'nodes');

// Data: nodeDir -> { resource, opParam, fileName? }
const nodeData = {
	OvhCloudAllDom: { resource: 'alldom', opParam: 'allDomOperation' },
	OvhCloudAuth: { resource: 'auth', opParam: 'authOperation' },
	OvhCloudBackupServices: { resource: 'backupservices', opParam: 'backupServicesOperation' },
	OvhCloudCdn: { resource: 'cdn', opParam: 'cdnOperation' },
	OvhCloudCluster: { resource: 'cluster', opParam: 'clusterOperation' },
	OvhCloudClusterHadoop: { resource: 'clusterhadoop', opParam: 'clusterHadoopOperation' },
	OvhCloudCommercialCatalog: {
		resource: 'commercialcatalog',
		opParam: 'commercialCatalogOperation',
	},
	OvhCloudConnectivity: { resource: 'connectivity', opParam: 'connectivityOperation' },
	OvhCloudContact: { resource: 'contact', opParam: 'contactOperation' },
	OvhCloudDbaas: { resource: 'dbaas', opParam: 'dbaasOperation' },
	OvhCloudDedicatedCeph: { resource: 'dedicatedceph', opParam: 'dedicatedCephOperation' },
	OvhCloudDedicatedCluster: { resource: 'dedicatedcluster', opParam: 'dedicatedClusterOperation' },
	OvhCloudDedicatedHousing: { resource: 'dedicatedhousing', opParam: 'dedicatedHousingOperation' },
	OvhCloudDedicatedInstallationTemplate: {
		resource: 'dedicatedinstallationtemplate',
		opParam: 'dedicatedInstallationTemplateOperation',
	},
	OvhCloudEmailDomain: { resource: 'emaildomain', opParam: 'emailDomainOperation' },
	OvhCloudExchange: { resource: 'exchange', opParam: 'exchangeOperation' },
	OvhCloudFreefax: { resource: 'freefax', opParam: 'freefaxOperation' },
	OvhCloudHorizonView: { resource: 'horizonview', opParam: 'horizonViewOperation' },
	OvhCloudHostingPrivateDatabase: {
		resource: 'hostingprivatedatabase',
		opParam: 'hostingPrivateDatabaseOperation',
	},
	OvhCloudIam: { resource: 'iam', opParam: 'iamOperation' },
	OvhCloudIPLoadbalancing: {
		resource: 'iploadbalancing',
		opParam: 'ipLoadbalancingOperation',
		fileName: 'OvhCloudIpLoadbalancing',
	},
	OvhCloudLocation: { resource: 'location', opParam: 'locationOperation' },
	OvhCloudManagedCms: { resource: 'managedcms', opParam: 'managedCmsOperation' },
	OvhCloudMe: { resource: 'me', opParam: 'meOperation' },
	OvhCloudMetrics: { resource: 'metrics', opParam: 'metricsOperation' },
	OvhCloudMsServices: { resource: 'msservices', opParam: 'msServicesOperation' },
	OvhCloudMxPlan: { resource: 'mxplan', opParam: 'mxPlanOperation' },
	OvhCloudNetworkDefense: { resource: 'networkdefense', opParam: 'networkDefenseOperation' },
	OvhCloudNewAccount: { resource: 'newaccount', opParam: 'newAccountOperation' },
	OvhCloudNotification: { resource: 'notification', opParam: 'notificationOperation' },
	OvhCloudNutanix: { resource: 'nutanix', opParam: 'nutanixOperation' },
	OvhCloudOkms: { resource: 'okms', opParam: 'okmsOperation' },
	OvhCloudOverTheBox: { resource: 'overthebox', opParam: 'overTheBoxOperation' },
	OvhCloudOvhCloudConnect: { resource: 'ovhcloudconnect', opParam: 'ovhCloudConnectOperation' },
	OvhCloudPack: { resource: 'pack', opParam: 'packOperation' },
	OvhCloudPackXdsl: { resource: 'packxdsl', opParam: 'packXdslOperation' },
	OvhCloudPartner: { resource: 'partner', opParam: 'partnerOperation' },
	OvhCloudPrice: { resource: 'price', opParam: 'priceOperation' },
	OvhCloudSecret: { resource: 'secret', opParam: 'secretOperation' },
	OvhCloudService: { resource: 'service', opParam: 'serviceOperation' },
	OvhCloudServices: { resource: 'services', opParam: 'servicesOperation' },
	OvhCloudSms: { resource: 'sms', opParam: 'smsOperation' },
	OvhCloudSsl: { resource: 'ssl', opParam: 'sslOperation' },
	OvhCloudSslGateway: { resource: 'sslgateway', opParam: 'sslGatewayOperation' },
	OvhCloudStack: { resource: 'stack', opParam: 'stackOperation' },
	OvhCloudStartup: { resource: 'startup', opParam: 'startupOperation' },
	OvhCloudStorage: { resource: 'storage', opParam: 'storageOperation' },
	OvhCloudSupply: { resource: 'supply', opParam: 'supplyOperation' },
	OvhCloudSupport: { resource: 'support', opParam: 'ovhCloudSupportTicketOperation' },
	OvhCloudVeeamCloudConnect: {
		resource: 'veeamcloudconnect',
		opParam: 'veeamCloudConnectOperation',
	},
	OvhCloudVeeamEnterprisePlus: { resource: 'veeamenterpriseplus', opParam: 'veeamOperation' },
	OvhCloudVip: { resource: 'vip', opParam: 'vipOperation' },
	OvhCloudVmwareCloudDirector: { resource: 'vmwareclouddirector', opParam: 'vcdOperation' },
	OvhCloudVrack: { resource: 'vrack', opParam: 'vrackOperation' },
	OvhCloudVrackServices: { resource: 'vrackservices', opParam: 'vrackServicesOperation' },
	OvhCloudXdsl: { resource: 'xdsl', opParam: 'xdslOperation' },
	OvhCloudZimbra: { resource: 'zimbra', opParam: 'zimbraOperation' },
};

let count = 0;
const modified = [];
const skipped = [];

for (const [nodeDir, { resource, opParam, fileName }] of Object.entries(nodeData)) {
	const baseName = fileName || nodeDir;
	const nodeFile = join(NODES_DIR, nodeDir, `${baseName}.node.ts`);

	if (!statSync(nodeFile).isFile()) {
		skipped.push(`${nodeDir}: file not found (${baseName}.node.ts)`);
		continue;
	}

	let src = readFileSync(nodeFile, 'utf-8');

	// Skip if already has perItemConcurrency
	if (src.includes('perItemConcurrency')) {
		skipped.push(`${nodeDir}: already has perItemConcurrency`);
		continue;
	}

	// 1) Update import: add classifyOperation
	// Handle both import paths: '../../shared/nodes' and '../../shared/nodes/BaseNode'
	src = src.replace(
		/import \{ ([^}]+) \} from '(\.\.\/\.\.\/shared\/nodes\/BaseNode)'/,
		(_match, existingImports, importPath) => {
			const hasClassify = existingImports.includes('classifyOperation');
			const newImports = hasClassify ? existingImports : `${existingImports}, classifyOperation`;
			return `import { ${newImports} } from '${importPath}'`;
		},
	);

	// 2) Replace the return line in the execute function
	// Find the line with 'return executeTemplate.call(this, execute);'
	// and replace it with the full perItemConcurrency version
	const returnLineRe = /(return executeTemplate\.call\(this, execute\);)/;
	const rm = returnLineRe.exec(src);
	if (!rm) {
		skipped.push(`${nodeDir}: no return executeTemplate line found`);
		continue;
	}

	// Find the indentation of the return line
	const returnLineIndex = src.slice(0, rm.index).split('\n').length - 1;
	const lines = src.split('\n');
	const returnLine = lines[returnLineIndex];
	const indentMatch = returnLine.match(/^(\s*)/);
	const baseIndent = indentMatch ? indentMatch[1] : '\t\t';

	const newReturnBlock = `${baseIndent}return executeTemplate.call(this, execute, {
${baseIndent}	perItemConcurrency: {
${baseIndent}		classify: (ctx, itemIndex) =>
${baseIndent}			classifyOperation(
${baseIndent}				String(ctx.getNodeParameter('${opParam}', itemIndex, { extractValue: true })),
${baseIndent}			),
${baseIndent}	},
${baseIndent}	errorContext: { resource: '${resource}', operationParam: '${opParam}' },
${baseIndent}});`;

	src = src.replace(returnLineRe, newReturnBlock);

	writeFileSync(nodeFile, src);
	count++;
	modified.push(`${nodeDir} (${resource}, ${opParam})`);
}

console.log(`Modified ${count} nodes:`);
for (const m of modified) console.log(`  - ${m}`);
console.log(`\nSkipped ${skipped.length}:`);
for (const s of skipped) console.log(`  - ${s}`);
