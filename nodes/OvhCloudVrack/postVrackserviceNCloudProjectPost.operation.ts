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
			description: 'The project value',
			displayOptions,
		},
	];
}

/**
 * add a publicCloud project to this vrack
 *
 * HTTP method: POST
 * Endpoint: /vrack/{serviceName}/cloudProject
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;



	const project = this.getNodeParameter('project', itemIndex) as string;


const body: IDataObject = {
    project: project
    };

	const client = new ApiClient(this);
	const data = (await client.httpPost('/vrack' + '/' + encodeURIComponent(serviceName) + '/' + 'cloudProject', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

