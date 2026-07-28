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
					typeOptions: { searchListMethod: 'searchDomain' },
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
	const name = encodeURIComponent(serviceName.value);

	const data = (await client.httpGet(`/domain/name/${name}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
