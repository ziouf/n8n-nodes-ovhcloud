import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IAM Tags',
			name: 'iamTags',
			type: 'string',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
	];
}

/**
 * Executes the Get List Spare operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/spare
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const iamTags = this.getNodeParameter('iamTags', itemIndex) as string;

	const qs: IDataObject = {
		iamTags: iamTags,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/spare', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
