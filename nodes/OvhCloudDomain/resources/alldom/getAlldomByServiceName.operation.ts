import type { IExecuteFunctions, IDataObject, INodeExecutionData } from "n8n-workflow";
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Domain Name',
			name: 'serviceName' as const,
			type: 'resourceLocator' as const,
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List' as const,
					name: 'list' as const,
					type: 'list' as const,
					typeOptions: { searchListMethod: 'searchAlldom' },
				},
				{
					displayName: 'By Name' as const,
					name: 'name' as const,
					type: 'string' as const,
					placeholder: 'example.com',
				},
			],
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as { value: string };
	const alldomName = serviceName.value;

	const data = (await client.httpGet(
		`/domain/alldom/${encodeURIComponent(alldomName)}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
