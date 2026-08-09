import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Secret Key',
			name: 'secretKey',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'The secret key of the secret to retrieve',
			displayOptions,
		},
		{
			displayName: 'Secret Type',
			name: 'secretType',
			type: 'string',
			default: '',
			required: true,
			typeOptions: { password: true },
			description: 'The type of the secret to retrieve',
			displayOptions,
		},
	];
}

/**
 * Retrieve a secret sent by email.
 *
 * HTTP method: POST
 * Endpoint: /secret/retrieve
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body: IDataObject = {
		secretKey: this.getNodeParameter('secretKey', _itemIndex ?? 0) as string,
		secretType: this.getNodeParameter('secretType', _itemIndex ?? 0) as string,
	};

	const data = (await client.httpPost('/secret/retrieve', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
