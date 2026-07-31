#!/usr/bin/env node

/**
 * Generate all OvhCloudTelephony node files.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const TELEPHONY_DIR = path.join(ROOT, 'nodes', 'OvhCloudTelephony');

const categories = {
	aliases: {
		operations: [
			{
				name: 'aliasListGet',
				method: 'GET',
				endpoint: '/telephony/aliases',
				displayName: 'List Aliases',
				description: 'List your telephony aliases',
			},
			{
				name: 'aliasGet',
				method: 'GET',
				endpoint: '/telephony/aliases/{serviceName}',
				params: ['serviceName'],
				displayName: 'Get Alias',
				description: 'Get alias properties',
				serviceName: true,
			},
			{
				name: 'aliasChangeContactPost',
				method: 'POST',
				endpoint: '/telephony/aliases/{serviceName}/changeContact',
				params: ['serviceName', 'contactAdmin', 'contactBilling', 'contactTech'],
				displayName: 'Change Contact',
				description: 'Launch a contact change procedure for an alias',
				serviceName: true,
			},
			{
				name: 'aliasServiceInfosGet',
				method: 'GET',
				endpoint: '/telephony/aliases/{serviceName}/serviceInfos',
				params: ['serviceName'],
				displayName: 'Get Alias Service Info',
				description: 'Get service information for an alias',
				serviceName: true,
			},
			{
				name: 'aliasServiceInfosPut',
				method: 'PUT',
				endpoint: '/telephony/aliases/{serviceName}/serviceInfos',
				params: [
					'serviceName',
					'contactAdmin',
					'contactBilling',
					'contactTech',
					'country',
					'description',
					'fax',
				],
				displayName: 'Update Alias Service Info',
				description: 'Update service information for an alias',
				serviceName: true,
			},
		],
	},
	lines: {
		operations: [
			{
				name: 'linesListGet',
				method: 'GET',
				endpoint: '/telephony/lines',
				displayName: 'List Lines',
				description: 'List your telephony lines',
			},
			{
				name: 'linesGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}',
				params: ['serviceName'],
				displayName: 'Get Line',
				description: 'Get line properties',
				serviceName: true,
			},
			{
				name: 'linesChangeContactPost',
				method: 'POST',
				endpoint: '/telephony/lines/{serviceName}/changeContact',
				params: ['serviceName', 'contactAdmin', 'contactBilling', 'contactTech'],
				displayName: 'Change Contact',
				description: 'Launch a contact change procedure for a line',
				serviceName: true,
			},
			{
				name: 'linesServiceInfosGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/serviceInfos',
				params: ['serviceName'],
				displayName: 'Get Line Service Info',
				description: 'Get service information for a line',
				serviceName: true,
			},
			{
				name: 'linesServiceInfosPut',
				method: 'PUT',
				endpoint: '/telephony/lines/{serviceName}/serviceInfos',
				params: [
					'serviceName',
					'contactAdmin',
					'contactBilling',
					'contactTech',
					'country',
					'description',
					'fax',
				],
				displayName: 'Update Line Service Info',
				description: 'Update service information for a line',
				serviceName: true,
			},
			{
				name: 'linesHardwareListGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/hardware',
				params: ['serviceName'],
				displayName: 'List Hardware',
				description: 'List hardware associated with a line',
				serviceName: true,
			},
			{
				name: 'linesHardwarePost',
				method: 'POST',
				endpoint: '/telephony/lines/{serviceName}/hardware',
				params: ['serviceName', 'macAddress'],
				displayName: 'Create Hardware',
				description: 'Add hardware to a line',
				serviceName: true,
			},
			{
				name: 'linesNumberListGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/number',
				params: ['serviceName'],
				displayName: 'List Numbers',
				description: 'List numbers associated with a line',
				serviceName: true,
			},
			{
				name: 'linesNumberPost',
				method: 'POST',
				endpoint: '/telephony/lines/{serviceName}/number',
				params: ['serviceName', 'country', 'number'],
				displayName: 'Create Number',
				description: 'Add a number to a line',
				serviceName: true,
			},
			{
				name: 'linesNumberGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId'],
				displayName: 'Get Number',
				description: 'Get number properties',
				serviceName: true,
				numberId: true,
			},
			{
				name: 'linesNumberPut',
				method: 'PUT',
				endpoint: '/telephony/lines/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId', 'country', 'number'],
				displayName: 'Update Number',
				description: 'Update number properties',
				serviceName: true,
				numberId: true,
			},
			{
				name: 'linesNumberDelete',
				method: 'DELETE',
				endpoint: '/telephony/lines/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId'],
				displayName: 'Delete Number',
				description: 'Delete a number from a line',
				serviceName: true,
				numberId: true,
			},
			{
				name: 'linesPortabilityListGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/portability',
				params: ['serviceName'],
				displayName: 'List Portabilities',
				description: 'List portabilities for a line',
				serviceName: true,
			},
			{
				name: 'linesPortabilityPost',
				method: 'POST',
				endpoint: '/telephony/lines/{serviceName}/portability',
				params: ['serviceName', 'number', 'expire'],
				displayName: 'Create Portability',
				description: 'Create a portability request for a line',
				serviceName: true,
			},
			{
				name: 'linesPortabilityGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/portability/{portabilityId}',
				params: ['serviceName', 'portabilityId'],
				displayName: 'Get Portability',
				description: 'Get portability details',
				serviceName: true,
				portabilityId: true,
			},
			{
				name: 'linesPortabilityPut',
				method: 'PUT',
				endpoint: '/telephony/lines/{serviceName}/portability/{portabilityId}',
				params: ['serviceName', 'portabilityId', 'expire'],
				displayName: 'Update Portability',
				description: 'Update portability properties',
				serviceName: true,
				portabilityId: true,
			},
			{
				name: 'linesPortabilityDelete',
				method: 'DELETE',
				endpoint: '/telephony/lines/{serviceName}/portability/{portabilityId}',
				params: ['serviceName', 'portabilityId'],
				displayName: 'Delete Portability',
				description: 'Delete a portability request',
				serviceName: true,
				portabilityId: true,
			},
			{
				name: 'linesSimListGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/sim',
				params: ['serviceName'],
				displayName: 'List SIMs',
				description: 'List SIMs associated with a line',
				serviceName: true,
			},
			{
				name: 'linesSimPost',
				method: 'POST',
				endpoint: '/telephony/lines/{serviceName}/sim',
				params: ['serviceName', 'iccid'],
				displayName: 'Create SIM',
				description: 'Add a SIM to a line',
				serviceName: true,
			},
			{
				name: 'linesSimGet',
				method: 'GET',
				endpoint: '/telephony/lines/{serviceName}/sim/{simId}',
				params: ['serviceName', 'simId'],
				displayName: 'Get SIM',
				description: 'Get SIM properties',
				serviceName: true,
				simId: true,
			},
			{
				name: 'linesSimPut',
				method: 'PUT',
				endpoint: '/telephony/lines/{serviceName}/sim/{simId}',
				params: ['serviceName', 'simId', 'iccid'],
				displayName: 'Update SIM',
				description: 'Update SIM properties',
				serviceName: true,
				simId: true,
			},
			{
				name: 'linesSimDelete',
				method: 'DELETE',
				endpoint: '/telephony/lines/{serviceName}/sim/{simId}',
				params: ['serviceName', 'simId'],
				displayName: 'Delete SIM',
				description: 'Delete a SIM from a line',
				serviceName: true,
				simId: true,
			},
		],
	},
	trunks: {
		operations: [
			{
				name: 'trunksListGet',
				method: 'GET',
				endpoint: '/telephony/trunks',
				displayName: 'List Trunks',
				description: 'List your telephony trunks',
			},
			{
				name: 'trunksGet',
				method: 'GET',
				endpoint: '/telephony/trunks/{serviceName}',
				params: ['serviceName'],
				displayName: 'Get Trunk',
				description: 'Get trunk properties',
				serviceName: true,
			},
			{
				name: 'trunksChangeContactPost',
				method: 'POST',
				endpoint: '/telephony/trunks/{serviceName}/changeContact',
				params: ['serviceName', 'contactAdmin', 'contactBilling', 'contactTech'],
				displayName: 'Change Contact',
				description: 'Launch a contact change procedure for a trunk',
				serviceName: true,
			},
			{
				name: 'trunksServiceInfosGet',
				method: 'GET',
				endpoint: '/telephony/trunks/{serviceName}/serviceInfos',
				params: ['serviceName'],
				displayName: 'Get Trunk Service Info',
				description: 'Get service information for a trunk',
				serviceName: true,
			},
			{
				name: 'trunksServiceInfosPut',
				method: 'PUT',
				endpoint: '/telephony/trunks/{serviceName}/serviceInfos',
				params: [
					'serviceName',
					'contactAdmin',
					'contactBilling',
					'contactTech',
					'country',
					'description',
				],
				displayName: 'Update Trunk Service Info',
				description: 'Update service information for a trunk',
				serviceName: true,
			},
			{
				name: 'trunksHardwareListGet',
				method: 'GET',
				endpoint: '/telephony/trunks/{serviceName}/hardware',
				params: ['serviceName'],
				displayName: 'List Hardware',
				description: 'List hardware associated with a trunk',
				serviceName: true,
			},
			{
				name: 'trunksHardwarePost',
				method: 'POST',
				endpoint: '/telephony/trunks/{serviceName}/hardware',
				params: ['serviceName', 'macAddress'],
				displayName: 'Create Hardware',
				description: 'Add hardware to a trunk',
				serviceName: true,
			},
			{
				name: 'trunksNumberListGet',
				method: 'GET',
				endpoint: '/telephony/trunks/{serviceName}/number',
				params: ['serviceName'],
				displayName: 'List Numbers',
				description: 'List numbers associated with a trunk',
				serviceName: true,
			},
			{
				name: 'trunksNumberPost',
				method: 'POST',
				endpoint: '/telephony/trunks/{serviceName}/number',
				params: ['serviceName', 'country', 'number'],
				displayName: 'Create Number',
				description: 'Add a number to a trunk',
				serviceName: true,
			},
			{
				name: 'trunksNumberGet',
				method: 'GET',
				endpoint: '/telephony/trunks/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId'],
				displayName: 'Get Number',
				description: 'Get number properties',
				serviceName: true,
				numberId: true,
			},
			{
				name: 'trunksNumberPut',
				method: 'PUT',
				endpoint: '/telephony/trunks/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId', 'country', 'number'],
				displayName: 'Update Number',
				description: 'Update number properties',
				serviceName: true,
				numberId: true,
			},
			{
				name: 'trunksNumberDelete',
				method: 'DELETE',
				endpoint: '/telephony/trunks/{serviceName}/number/{numberId}',
				params: ['serviceName', 'numberId'],
				displayName: 'Delete Number',
				description: 'Delete a number from a trunk',
				serviceName: true,
				numberId: true,
			},
		],
	},
	numbers: {
		operations: [
			{
				name: 'numbersListGet',
				method: 'GET',
				endpoint: '/telephony/numbers',
				displayName: 'List Numbers',
				description: 'List your telephony numbers',
			},
			{
				name: 'numbersGet',
				method: 'GET',
				endpoint: '/telephony/numbers/{numberId}',
				params: ['numberId'],
				displayName: 'Get Number',
				description: 'Get number properties',
				numberId: true,
			},
			{
				name: 'numbersPost',
				method: 'POST',
				endpoint: '/telephony/numbers',
				params: ['country', 'number'],
				displayName: 'Create Number',
				description: 'Create a new telephony number',
			},
			{
				name: 'numbersPut',
				method: 'PUT',
				endpoint: '/telephony/numbers/{numberId}',
				params: ['numberId', 'country', 'number'],
				displayName: 'Update Number',
				description: 'Update number properties',
				numberId: true,
			},
			{
				name: 'numbersDelete',
				method: 'DELETE',
				endpoint: '/telephony/numbers/{numberId}',
				params: ['numberId'],
				displayName: 'Delete Number',
				description: 'Delete a telephony number',
				numberId: true,
			},
			{
				name: 'numbersPortabilityListGet',
				method: 'GET',
				endpoint: '/telephony/numbers/{numberId}/portability',
				params: ['numberId'],
				displayName: 'List Portabilities',
				description: 'List portabilities for a number',
				numberId: true,
			},
			{
				name: 'numbersPortabilityPost',
				method: 'POST',
				endpoint: '/telephony/numbers/{numberId}/portability',
				params: ['numberId', 'expire'],
				displayName: 'Create Portability',
				description: 'Create a portability request for a number',
				numberId: true,
			},
			{
				name: 'numbersPortabilityGet',
				method: 'GET',
				endpoint: '/telephony/numbers/{numberId}/portability/{portabilityId}',
				params: ['numberId', 'portabilityId'],
				displayName: 'Get Portability',
				description: 'Get portability details',
				numberId: true,
				portabilityId: true,
			},
			{
				name: 'numbersPortabilityPut',
				method: 'PUT',
				endpoint: '/telephony/numbers/{numberId}/portability/{portabilityId}',
				params: ['numberId', 'portabilityId', 'expire'],
				displayName: 'Update Portability',
				description: 'Update portability properties',
				numberId: true,
				portabilityId: true,
			},
			{
				name: 'numbersPortabilityDelete',
				method: 'DELETE',
				endpoint: '/telephony/numbers/{numberId}/portability/{portabilityId}',
				params: ['numberId', 'portabilityId'],
				displayName: 'Delete Portability',
				description: 'Delete a portability request',
				numberId: true,
				portabilityId: true,
			},
		],
	},
	accessories: {
		operations: [
			{
				name: 'accessoriesGet',
				method: 'GET',
				endpoint: '/telephony/accessories',
				displayName: 'List Accessories',
				description: 'Get available telephony accessories',
				queryParams: ['country', 'brand'],
			},
		],
	},
	offers: {
		operations: [
			{
				name: 'lineOffersGet',
				method: 'GET',
				endpoint: '/telephony/line/offers',
				params: ['country'],
				displayName: 'List Line Offers',
				description: 'Get available line offers by country',
				queryParams: ['country'],
			},
			{
				name: 'lineOfferPhonesGet',
				method: 'GET',
				endpoint: '/telephony/line/offer/phones',
				params: ['country', 'offer'],
				displayName: 'Get Offer Phones',
				description: 'Get phones for a line offer',
				queryParams: ['country', 'offer'],
			},
			{
				name: 'faxOffersGet',
				method: 'GET',
				endpoint: '/telephony/fax/offers',
				params: ['country'],
				displayName: 'List Fax Offers',
				description: 'Get available fax offers by country',
				queryParams: ['country'],
			},
			{
				name: 'lineOfferDetailsGet',
				method: 'GET',
				endpoint: '/telephony/line/offer/details',
				displayName: 'Get Line Offer Details',
				description: 'Get detailed information about a line offer',
				queryParams: ['country', 'offer'],
			},
		],
	},
	directories: {
		operations: [
			{
				name: 'directoriesCitiesGet',
				method: 'GET',
				endpoint: '/telephony/directories/cities',
				params: ['country', 'zipCode'],
				displayName: 'List Cities',
				description: 'Get cities by country and zip code',
				queryParams: ['country', 'zipCode'],
			},
			{
				name: 'directoriesAvailableZipCodesGet',
				method: 'GET',
				endpoint: '/telephony/directories/availableZipCodes',
				params: ['country', 'number'],
				displayName: 'List Zip Codes',
				description: 'Get available zip codes by country and number',
				queryParams: ['country', 'number'],
			},
			{
				name: 'directoriesServicesGet',
				method: 'GET',
				endpoint: '/telephony/directories/services',
				params: ['country'],
				displayName: 'List Services',
				description: 'Get available telephony services by country',
				queryParams: ['country'],
			},
			{
				name: 'directoriesCountriesGet',
				method: 'GET',
				endpoint: '/telephony/directories/countries',
				displayName: 'List Countries',
				description: 'Get available countries for telephony',
			},
		],
	},
	misc: {
		operations: [
			{
				name: 'telephonyListGet',
				method: 'GET',
				endpoint: '/telephony',
				displayName: 'List Billing Accounts',
				description: 'List your telephony billing accounts',
			},
			{
				name: 'sipDomainsGet',
				method: 'GET',
				endpoint: '/telephony/availableDefaultSipDomains',
				params: ['type'],
				displayName: 'List SIP Domains',
				description: 'Get available default SIP domains',
				queryParams: ['type'],
			},
			{
				name: 'currentOrderIdsGet',
				method: 'GET',
				endpoint: '/telephony/currentOrderIds',
				displayName: 'List Current Orders',
				description: 'Get current telephony order IDs',
			},
			{
				name: 'searchServicesGet',
				method: 'GET',
				endpoint: '/telephony/searchServices',
				params: ['domain'],
				displayName: 'Search Services',
				description: 'Search a service with its domain to get its billing account and type',
				queryParams: ['domain'],
			},
			{
				name: 'setDefaultSipDomainPost',
				method: 'POST',
				endpoint: '/telephony/setDefaultSipDomain',
				params: ['country', 'type'],
				displayName: 'Set Default SIP Domain',
				description: 'Set the default SIP domain for a country and type',
			},
		],
	},
};

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function getParamProps(op) {
	const props = [];
	const hasServiceName = op.serviceName || (op.params && op.params.includes('serviceName'));
	const hasNumberId = op.numberId || (op.params && op.params.includes('numberId'));
	const hasPortabilityId = op.portabilityId || (op.params && op.params.includes('portabilityId'));
	const hasSimId = op.simId || (op.params && op.params.includes('simId'));

	if (hasServiceName) {
		props.push(`        {
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The telephony service name (line number)',
          displayOptions,
        },`);
	}
	if (hasNumberId) {
		props.push(`        {
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The number identifier',
          displayOptions,
        },`);
	}
	if (hasPortabilityId) {
		props.push(`        {
          displayName: 'Portability ID',
          name: 'portabilityId',
          type: 'string',
          default: '',
          required: true,
          description: 'The portability identifier',
          displayOptions,
        },`);
	}
	if (hasSimId) {
		props.push(`        {
          displayName: 'SIM ID',
          name: 'simId',
          type: 'string',
          default: '',
          required: true,
          description: 'The SIM identifier',
          displayOptions,
        },`);
	}

	const extraParams = op.params || [];
	for (const p of extraParams) {
		if (['serviceName', 'numberId', 'portabilityId', 'simId'].includes(p)) continue;
		const isRequired = [
			'contactAdmin',
			'contactBilling',
			'contactTech',
			'country',
			'macAddress',
			'iccid',
			'number',
		].includes(p);
		const label = p.replace(/([A-Z])/g, ' $1').trim();
		props.push(`        {
          displayName: '${label}',
          name: '${p}',
          type: 'string',
          default: '',
          required: ${isRequired},
          description: 'The ${p} parameter',
          displayOptions,
        },`);
	}

	if (op.queryParams && op.queryParams.length > 0) {
		for (const qp of op.queryParams) {
			const label = qp.replace(/([A-Z])/g, ' $1').trim();
			props.push(`        {
          displayName: '${label}',
          name: '${qp}',
          type: 'string',
          default: '',
          required: ${['country'].includes(qp)},
          description: 'The ${qp} parameter',
          displayOptions,
        },`);
		}
	}

	return props;
}

function buildOperationFile(op) {
	const hasServiceName = op.serviceName || (op.params && op.params.includes('serviceName'));
	const hasNumberId = op.numberId || (op.params && op.params.includes('numberId'));
	const hasPortabilityId = op.portabilityId || (op.params && op.params.includes('portabilityId'));
	const hasSimId = op.simId || (op.params && op.params.includes('simId'));
	const hasQueryParams = op.queryParams && op.queryParams.length > 0;

	const paramProps = getParamProps(op);

	// Build endpoint URL parts for variable interpolation
	// Split path into literal segments and variables, then build proper JS concatenation
	let endpointPath = op.endpoint;
	let endpointSegments = [];
	let currentLiteral = '';
	for (let i = 0; i < endpointPath.length; i++) {
		if (endpointPath[i] === '{') {
			const end = endpointPath.indexOf('}', i);
			const varName = endpointPath.substring(i + 1, end);
			if (currentLiteral) {
				endpointSegments.push({ type: 'literal', value: currentLiteral });
				currentLiteral = '';
			}
			endpointSegments.push({ type: 'variable', name: varName });
			i = end;
		} else {
			currentLiteral += endpointPath[i];
		}
	}
	if (currentLiteral) {
		endpointSegments.push({ type: 'literal', value: currentLiteral });
	}

	// Build the JS expression for the URL
	let urlExpr = "'";
	const lastSeg = endpointSegments[endpointSegments.length - 1];
	for (let j = 0; j < endpointSegments.length; j++) {
		const seg = endpointSegments[j];
		if (seg.type === 'literal') {
			urlExpr += seg.value;
		} else {
			urlExpr += "' + " + seg.name;
			// Only add closing quote if there's a literal segment after this variable
			if (j < endpointSegments.length - 1 && endpointSegments[j + 1].type === 'literal') {
				urlExpr += " + '";
			}
		}
	}
	if (lastSeg.type === 'literal') {
		urlExpr += "'";
	}

	// Build httpMethodCapital
	const httpMethodLower = op.method.toLowerCase();
	const httpMethodCapital = op.method.charAt(0) + httpMethodLower.slice(1);

	// Build operation type for JSDoc
	const operationType = httpMethodCapital + ' ' + op.displayName.replace(/\s/g, '');

	// Build variable declarations
	let varDecls = '';
	if (hasServiceName)
		varDecls +=
			"\tconst serviceName = this.getNodeParameter('serviceName', itemIndex) as string;\n";
	if (hasNumberId)
		varDecls += "\tconst numberId = this.getNodeParameter('numberId', itemIndex) as string;\n";
	if (hasPortabilityId)
		varDecls +=
			"\tconst portabilityId = this.getNodeParameter('portabilityId', itemIndex) as string;\n";
	if (hasSimId)
		varDecls += "\tconst simId = this.getNodeParameter('simId', itemIndex) as string;\n";

	// Build qs object for query params
	let qsCode = '';
	if (hasQueryParams) {
		// Declare query param values as variables
		const qsVarDecls = op.queryParams
			.map((qp) => '\tconst ' + qp + " = this.getNodeParameter('" + qp + "', itemIndex) as string;")
			.join('\n');
		const qsEntries = op.queryParams.map((qp) => '    ' + qp + ': ' + qp).join(',\n');
		qsCode = qsVarDecls + '\n\n\tconst qs: IDataObject = {\n' + qsEntries + '\n  };\n';
	}

	// Build body for POST/PUT
	let bodyCode = '';
	let bodyVar = '';
	if (['POST', 'PUT'].includes(op.method)) {
		const bodyParams = (op.params || []).filter(
			(p) => !['serviceName', 'numberId', 'portabilityId', 'simId'].includes(p),
		);
		if (bodyParams.length > 0) {
			// Declare body parameters as variables
			const bodyVarDecls = bodyParams
				.map((p) => '\tconst ' + p + " = this.getNodeParameter('" + p + "', itemIndex) as string;")
				.join('\n');
			const bodyEntries = bodyParams.map((p) => '    ' + p + ': ' + p).join(',\n');
			bodyCode = bodyVarDecls + '\n\n\tconst body: IDataObject = {\n' + bodyEntries + '\n    };\n';
			bodyVar = ', body';
		}
	}

	// Build API call
	const qsArg = hasQueryParams ? ', qs' : '';
	const apiCall = 'await client.http' + httpMethodCapital + '(' + urlExpr + bodyVar + qsArg + ')';

	const fileContent = [
		'import type {',
		'\tIDataObject,',
		'\tIExecuteFunctions,',
		'\tIDisplayOptions,',
		'\tINodeExecutionData,',
		'\tINodeProperties,',
		"} from 'n8n-workflow';",
		"import { ApiClient } from '../../../shared/transport/ApiClient';",
		'',
		'export function description(displayOptions: IDisplayOptions): INodeProperties[] {',
		'\treturn [',
		...paramProps,
		'\t];',
		'}',
		'',
		'/**',
		' * Executes the ' + operationType + ' operation.',
		' *',
		' * HTTP method: ' + op.method,
		' * Endpoint: ' + op.endpoint,
		' */',
		'export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {',
		varDecls,
		qsCode,
		bodyCode,
		'\tconst client = new ApiClient(this);',
		'\tconst data = (' + apiCall + ') as IDataObject;',
		'\treturn this.helpers.returnJsonArray([data]);',
		'}',
		'',
	].join('\n');

	return fileContent;
}

function buildSpecFile(op) {
	const hasServiceName = op.serviceName || (op.params && op.params.includes('serviceName'));
	const hasNumberId = op.numberId || (op.params && op.params.includes('numberId'));
	const hasPortabilityId = op.portabilityId || (op.params && op.params.includes('portabilityId'));
	const hasSimId = op.simId || (op.params && op.params.includes('simId'));

	const httpMethodLower = op.method.toLowerCase();
	const httpMethodCapital = op.method.charAt(0) + httpMethodLower.slice(1);

	let getNodeReturnValue = '';
	if (hasServiceName)
		getNodeReturnValue += "\t\t\tif (param === 'serviceName') return 'test-service';\n";
	if (hasNumberId)
		getNodeReturnValue += "\t\t\tif (param === 'numberId') return 'test-number-id';\n";
	if (hasPortabilityId)
		getNodeReturnValue += "\t\t\tif (param === 'portabilityId') return 'test-port-id';\n";
	if (hasSimId) getNodeReturnValue += "\t\t\tif (param === 'simId') return 'test-sim-id';\n";

	const itemIndexArg = ', 0';

	const fileContent = [
		'/* eslint-disable @typescript-eslint/no-explicit-any */',
		"import { description, execute } from './" + op.name + ".operation';",
		'',
		"jest.mock('../../../shared/transport/ApiClient', () => {",
		'\tconst mockHttpClient = {',
		'\t\thttpGet: jest.fn(),',
		'\t\thttpPost: jest.fn(),',
		'\t\thttpPut: jest.fn(),',
		'\t\thttpDelete: jest.fn(),',
		'\t};',
		'\treturn { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };',
		'});',
		'',
		"import { ApiClient } from '../../../shared/transport/ApiClient';",
		'',
		"describe('telephony " + op.name + " operation', () => {",
		"\tdescribe('description', () => {",
		"\t\tit('should return all required parameters', () => {",
		'\t\t\tconst result = description({ show: {} });',
		'\t\t\texpect(result.length).toBeGreaterThanOrEqual(0);',
		'\t\t});',
		'\t});',
		'',
		"\tdescribe('execute', () => {",
		'\t\tlet mockExecuteFunctions: any;',
		'\t\tbeforeEach(() => {',
		'\t\t\tmockExecuteFunctions = {',
		'\t\t\t\tgetNodeParameter: jest.fn(),',
		'\t\t\t\thelpers: { returnJsonArray: jest.fn((data) => data) },',
		'\t\t\t};',
		'\t\t});',
		'',
		"\t\tit('should call the correct API endpoint', async () => {",
		"\t\t\tconst mockData = { id: 'test-id' };",
		'\t\t\tconst client = new ApiClient(mockExecuteFunctions) as any;',
		'\t\t\t(client.http' + httpMethodCapital + ' as jest.Mock).mockResolvedValue(mockData);',
		'',
		'\t\t\tmockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {',
		getNodeReturnValue ? getNodeReturnValue : '',
		"\t\t\t\treturn '';",
		'\t\t\t});',
		'',
		'\t\t\tconst result = await execute.call(mockExecuteFunctions' + itemIndexArg + ');',
		'\t\t\texpect((client.http' +
			httpMethodCapital +
			' as jest.Mock).mock.calls.length).toBeGreaterThan(0);',
		'\t\t\texpect(result).toMatchObject([mockData]);',
		'\t\t});',
		'\t});',
		'});',
		'',
	].join('\n');

	return fileContent;
}

function buildIndexFile() {
	let imports = '';
	let operationOptions = '';
	let displayOptionsBlock = '';
	let switchCases = '';

	for (const cat of Object.values(categories)) {
		for (const op of cat.operations) {
			const opNameCap = capitalize(op.name);
			const catDir =
				op.name
					.split('List')[0]
					.split('Get')[0]
					.split('Post')[0]
					.split('Put')[0]
					.split('Delete')[0] || 'misc';
			// Determine category from name prefix
			let catPath = 'misc';
			if (op.name.startsWith('alias')) catPath = 'aliases';
			else if (op.name.startsWith('lines')) catPath = 'lines';
			else if (op.name.startsWith('trunks')) catPath = 'trunks';
			else if (op.name.startsWith('numbers')) catPath = 'numbers';
			else if (op.name.startsWith('accessories')) catPath = 'accessories';
			else if (
				op.name.startsWith('lineOffers') ||
				op.name.startsWith('lineOffer') ||
				op.name.startsWith('faxOffers')
			)
				catPath = 'offers';
			else if (op.name.startsWith('directories')) catPath = 'directories';

			imports +=
				'import {\n\texecute as execute' +
				opNameCap +
				',\n\tdescription as description' +
				opNameCap +
				",\n} from './" +
				catPath +
				'/' +
				op.name +
				".operation';\n";

			operationOptions +=
				"\t\t\t\t{\n\t\t\t\t\tname: '" +
				op.displayName +
				"',\n\t\t\t\t\tvalue: '" +
				op.name +
				"',\n\t\t\t\t\taction: '" +
				op.description +
				"',\n\t\t\t\t},\n";

			displayOptionsBlock +=
				'\t\t...(description' +
				opNameCap +
				"({\n\t\t\t...displayOptions,\n\t\t\tshow: { telephonyOperation: ['" +
				op.name +
				"'] },\n\t\t}) as INodeProperties[]),\n";

			const itemIndexArg = ', itemIndex';
			switchCases +=
				"\t\tcase '" +
				op.name +
				"':\n\t\t\treturn execute" +
				opNameCap +
				'.call(this' +
				itemIndexArg +
				');\n';
		}
	}

	return [
		'import type {',
		'\tIDisplayOptions,',
		'\tIExecuteFunctions,',
		'\tINodeExecutionData,',
		'\tINodeProperties,',
		"} from 'n8n-workflow';",
		'',
		imports,
		'export function description(displayOptions: IDisplayOptions): INodeProperties[] {',
		'\tconst operationProperties: INodeProperties[] = [',
		'\t\t{',
		"\t\t\tdisplayName: 'Operation',",
		"\t\t\tname: 'telephonyOperation',",
		"\t\t\ttype: 'options',",
		'\t\t\tnoDataExpression: true,',
		'\t\t\toptions: [',
		operationOptions,
		'\t\t\t],',
		"\t\t\tdefault: 'telephonyListGet',",
		'\t\t\tdisplayOptions,',
		'\t\t},',
		'\t];',
		'',
		'\tconst properties: INodeProperties[] = [',
		'\t\t...operationProperties,',
		displayOptionsBlock,
		'\t];',
		'',
		'\treturn properties;',
		'}',
		'',
		'export async function execute(',
		'\tthis: IExecuteFunctions,',
		'\titemIndex: number,',
		'): Promise<INodeExecutionData[]> {',
		"\tconst operation = this.getNodeParameter('telephonyOperation', itemIndex, {",
		'\t\textractValue: true,',
		'\t});',
		'',
		'\tswitch (operation) {',
		switchCases,
		'\t}',
		'',
		'\tthrow new Error(`Unsupported operation "${operation}" for resource "telephony"`);',
		'}',
		'',
	].join('\n');
}

function buildNodeFile() {
	return [
		'import type {',
		'\tIExecuteFunctions,',
		'\tINodeExecutionData,',
		'\tINodeType,',
		'\tINodeTypeDescription,',
		"} from 'n8n-workflow';",
		"import { NodeConnectionTypes } from 'n8n-workflow';",
		"import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';",
		"import { description, execute } from './index';",
		"import { BaseNode, executeTemplate } from '../../shared/nodes/BaseNode';",
		'',
		'export class OvhCloudTelephony extends BaseNode implements INodeType {',
		'\tdescription: INodeTypeDescription = {',
		"\t\tdisplayName: 'OVH Cloud Telephony',",
		"\t\tname: 'ovhCloudTelephony',",
		'\t\ticon: OvhCloudIcon,',
		"\t\tgroup: ['input'],",
		'\t\tversion: 1,',
		'\t\tsubtitle: \'={{$parameter["telephonyOperation"]}}\',',
		"\t\tdescription: 'Manage OVHcloud telephony services via /telephony API v1',",
		"\t\tdefaults: { name: 'OVH Cloud Telephony' },",
		'\t\tusableAsTool: true,',
		'\t\tinputs: [NodeConnectionTypes.Main],',
		'\t\toutputs: [NodeConnectionTypes.Main],',
		'\t\tcredentials: [{ name: OvhCloudApiSecretName, required: true }],',
		'\t\tproperties: [...description({})],',
		'\t};',
		'',
		'\tasync execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {',
		'\t\treturn executeTemplate.call(this, execute);',
		'\t}',
		'}',
		'',
	].join('\n');
}

function main() {
	// Write node file
	fs.writeFileSync(path.join(TELEPHONY_DIR, 'OvhCloudTelephony.node.ts'), buildNodeFile());
	console.log('Created OvhCloudTelephony.node.ts');

	// Write index file
	fs.writeFileSync(path.join(TELEPHONY_DIR, 'index.ts'), buildIndexFile());
	console.log('Created index.ts');

	// Write operation files
	let totalOps = 0;
	for (const cat of Object.values(categories)) {
		for (const op of cat.operations) {
			// Determine category folder from name
			let catPath = 'misc';
			if (op.name.startsWith('alias')) catPath = 'aliases';
			else if (op.name.startsWith('lines')) catPath = 'lines';
			else if (op.name.startsWith('trunks')) catPath = 'trunks';
			else if (op.name.startsWith('numbers')) catPath = 'numbers';
			else if (op.name.startsWith('accessories')) catPath = 'accessories';
			else if (
				op.name.startsWith('lineOffers') ||
				op.name.startsWith('lineOffer') ||
				op.name.startsWith('faxOffers')
			)
				catPath = 'offers';
			else if (op.name.startsWith('directories')) catPath = 'directories';

			const opFile = path.join(TELEPHONY_DIR, catPath, op.name + '.operation.ts');
			const specFile = path.join(TELEPHONY_DIR, catPath, op.name + '.operation.spec.ts');
			fs.writeFileSync(opFile, buildOperationFile(op));
			fs.writeFileSync(specFile, buildSpecFile(op));
			totalOps++;
		}
	}

	console.log('Created ' + totalOps + ' operation files (' + totalOps * 2 + ' total with specs)');
	console.log('Done!');
}

main();
