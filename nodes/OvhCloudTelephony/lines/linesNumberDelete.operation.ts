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
          displayName: 'Service Name',
          name: 'serviceName',
          type: 'string',
          default: '',
          required: true,
          description: 'The telephony service name (line number)',
          displayOptions,
        },
        {
          displayName: 'Number ID',
          name: 'numberId',
          type: 'string',
          default: '',
          required: true,
          description: 'The phone number',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete DeleteNumber operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/lines/{serviceName}/number/{numberId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const numberId = this.getNodeParameter('numberId', _itemIndex) as string;



	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/lines/' + serviceName + '/number/' + numberId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
