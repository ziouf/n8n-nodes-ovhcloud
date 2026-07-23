import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Extension Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'name', value: '' },
			required: true,
			description: 'The extension name (e.g. .eu.org)',
			modes: [
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: '.eu.org',
				},
			],
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpGet(
		`/domain/extensions/${serviceName}/registryConfigurations`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
