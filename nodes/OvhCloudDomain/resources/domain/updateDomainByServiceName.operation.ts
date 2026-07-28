import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Domain Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'searchDomain' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
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

	let targetSpecBody: { [key: string]: unknown } | undefined;
	try {
		const rawTargetSpec = this.getNodeParameter('targetSpec', 0, {}) as unknown;
		if (rawTargetSpec && typeof rawTargetSpec === 'object' && !Array.isArray(rawTargetSpec)) {
			// The n8n parameter system wraps collection params in a .json property when not using extractValue
			targetSpecBody = ((rawTargetSpec as { json?: unknown } | undefined)?.json ?? rawTargetSpec) as { [key: string]: unknown };
		} else if (typeof rawTargetSpec === 'object') {
			targetSpecBody = rawTargetSpec as { [key: string]: unknown };
		}
	} catch {
		// Parameter may not be set - leave body undefined
	}

	if (!targetSpecBody || Object.keys(targetSpecBody).length === 0) {
		throw new Error('A target spec body must be provided for domain update.');
	}

	await client.httpPut(`/domain/name/${name}`, targetSpecBody);

	return this.helpers.returnJsonArray([{ ok: true, message: 'Domain updated successfully' }]);
}
