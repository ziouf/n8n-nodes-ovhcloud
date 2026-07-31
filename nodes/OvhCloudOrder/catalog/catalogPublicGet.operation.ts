import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Product',
			name: 'product',
			type: 'options',
			options: [
				{ name: 'Domain', value: 'domain' },
				{ name: 'Eco', value: 'eco' },
				{ name: 'emailDomain', value: 'emailDomain' },
				{ name: 'Emailpro', value: 'emailpro' },
				{ name: 'Exchange', value: 'exchange' },
				{ name: 'ipLoadbalancing', value: 'ipLoadbalancing' },
				{ name: 'licenseHycu', value: 'licenseHycu' },
				{ name: 'licensePlesk', value: 'licensePlesk' },
				{ name: 'licenseSqlServer', value: 'licenseSqlServer' },
				{ name: 'licenseWindows', value: 'licenseWindows' },
				{ name: 'licensecPanel', value: 'licensecPanel' },
				{ name: 'Logs', value: 'logs' },
				{ name: 'Nasha', value: 'nasha' },
				{ name: 'Netapp', value: 'netapp' },
				{ name: 'Nutanix', value: 'nutanix' },
				{ name: 'office365Prepaid', value: 'office365Prepaid' },
				{ name: 'officePrepaid', value: 'officePrepaid' },
				{ name: 'Okms', value: 'okms' },
				{ name: 'ovhCloudConnect', value: 'ovhCloudConnect' },
				{ name: 'packsProfessionalServices', value: 'packsProfessionalServices' },
				{ name: 'privateCloud', value: 'privateCloud' },
				{ name: 'privateCloudEnterprise', value: 'privateCloudEnterprise' },
				{ name: 'privateSQL', value: 'privateSQL' },
				{ name: 'sslGateway', value: 'sslGateway' },
				{ name: 'Telephony', value: 'telephony' },
				{ name: 'vmwareCloudDirector', value: 'vmwareCloudDirector' },
				{ name: 'vmwareCloudDirectorBackup', value: 'vmwareCloudDirectorBackup' },
				{ name: 'Vps', value: 'vps' },
				{ name: 'webHosting', value: 'webHosting' },
				{ name: 'webPaaS', value: 'webPaaS' },
				{ name: 'Zimbra', value: 'zimbra' },
			],
			default: 'domain',
			description: 'The catalog product',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Catalog Public operation.
 *
 * HTTP method: GET
 * Endpoint: /order/catalog/public/{product}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const product = this.getNodeParameter('product', 0) as string;

	const data = (await client.httpGet(`/order/catalog/public/${product}`)) as INodeExecutionData;
	return this.helpers.returnJsonArray([data]);
}
