import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceName parameter',
			displayOptions,
		},
		{
			displayName: 'Entreprise Number',
			name: 'entrepriseNumber',
			type: 'string',
			default: '',
			required: true,
			description: 'Entreprise number to fetch informations from',
			displayOptions,
		},
	];
}

/**
 * Executes the ServiceDirectoryFetchEntrepriseInformationsPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/service/{serviceName}/directory/fetchEntrepriseInformations
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const entrepriseNumber = this.getNodeParameter('entrepriseNumber', _itemIndex) as string;

	const body: IDataObject = {
		entrepriseNumber: entrepriseNumber,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/service' + '/' + encodeURIComponent(serviceName) + '/directory' + '/fetchEntrepriseInformations', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
