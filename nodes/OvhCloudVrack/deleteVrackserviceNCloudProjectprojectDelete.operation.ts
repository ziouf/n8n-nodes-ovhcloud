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
			displayName: 'Project',
			name: 'project',
			type: 'string',
			default: '',
			required: true,
			description: 'The project identifier',
			displayOptions,
		},
	];
}

/**
 * remove this publicCloud project from this vrack
 *
 * HTTP method: DELETE
 * Endpoint: /vrack/{serviceName}/cloudProject/{project}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const project = this.getNodeParameter('project', _itemIndex) as string;





	const client = new ApiClient(this);
	const data = (await client.httpDelete('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'cloudProject' + '/' + encodeURIComponent(project))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

