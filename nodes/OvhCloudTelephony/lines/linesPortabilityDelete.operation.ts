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
          displayName: 'Portability ID',
          name: 'portabilityId',
          type: 'string',
          default: '',
          required: true,
          description: 'The portability',
          displayOptions,
        },
	];
}

/**
 * Executes the Delete DeletePortability operation.
 *
 * HTTP method: DELETE
 * Endpoint: /telephony/lines/{serviceName}/portability/{portabilityId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const portabilityId = this.getNodeParameter('portabilityId', _itemIndex) as string;



	const client = getClient(this);
	const data = (await client.httpDelete('/telephony/lines/' + serviceName + '/portability/' + portabilityId)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
