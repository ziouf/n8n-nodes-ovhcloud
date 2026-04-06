import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * @brief Update Domain operation
 *
 * Updates domain configuration (DNSSEC, OVH subsidiary).
 *
 * HTTP method: PUT
 * Endpoint: /domain/{serviceName}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the domain. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: { mode: 'str', value: '' },
			modes: [
				{ displayName: 'By Name', name: 'str', type: 'string' },
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a domain...',
					typeOptions: { searchListMethod: 'getDomainServices', searchable: true },
				},
			],
			displayOptions,
		},
		{
			displayName: 'DNSSEC Supported',
			name: 'dnssecSupported',
			type: 'boolean',
			default: false,
			description: 'Whether DNSSEC is supported for this domain',
			displayOptions,
		},
		{
			displayName: 'OVH Subsidiary',
			name: 'ovhSubsidiary',
			type: 'string',
			default: '',
			description: 'OVH subsidiary code (e.g., FR, UK, DE)',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Domain operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;

	const body: IDataObject = {};
	const dnssecSupported = this.getNodeParameter('dnssecSupported', 0, false) as boolean;
	const ovhSubsidiary = this.getNodeParameter('ovhSubsidiary', 0, '') as string;

	if (dnssecSupported !== undefined) body.dnssecSupported = dnssecSupported;
	if (ovhSubsidiary) body.ovhSubsidiary = ovhSubsidiary;

	const data = (await client.httpPut(`/domain/${serviceName}`, body)) as IDataObject;
	return [{ json: data }];
}
