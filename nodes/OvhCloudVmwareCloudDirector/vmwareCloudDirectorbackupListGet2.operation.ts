import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get VMware Cloud Director Backup service operation.
 *
 * HTTP method: GET
 * Endpoint: /vmwareCloudDirector/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const backupId = this.getNodeParameter('backupId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/vmwareCloudDirector/backup/' + backupId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
