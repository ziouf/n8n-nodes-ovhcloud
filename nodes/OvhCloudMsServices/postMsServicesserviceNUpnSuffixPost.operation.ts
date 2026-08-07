import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeProperties,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';


export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'ServiceName',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The servicename identifier',
			displayOptions,
		},
		{
			displayName: 'Suffix',
			name: 'suffix',
			type: 'string',
			default: '',
			description: 'The suffix value',
			displayOptions,
		},
	];
}

/**
 * Create new UPN suffix
 *
 * HTTP method: POST
 * Endpoint: /msServices/{serviceName}/upnSuffix
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const suffix = this.getNodeParameter('suffix', itemIndex) as string;


const body: IDataObject = {
    suffix: suffix
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/msServices' + '/' + encodeURIComponent(serviceName) + '/' + 'upnSuffix', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

