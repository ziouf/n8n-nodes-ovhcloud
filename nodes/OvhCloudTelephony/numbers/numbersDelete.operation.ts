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
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The number identifier',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete DeleteNumber operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/numbers/{numberId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const numberId = this.getNodeParameter('numberId', itemIndex) as string;



	const client = new ApiClient(this);
	const data = (await client.httpDelete('/telephony/numbers/' + numberId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
