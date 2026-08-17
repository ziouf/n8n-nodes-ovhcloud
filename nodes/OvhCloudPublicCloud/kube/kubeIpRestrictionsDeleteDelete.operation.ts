import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will permanently delete the IP restriction. This action is irreversible.', displayOptions),
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Kube ID',
			name: 'kubeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Kube cluster ID',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address to remove from restrictions',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Kube IP Restriction operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/ipRestrictions/{ip}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const ip = this.getNodeParameter('ip', _itemIndex ?? 0) as string;
	await client.httpDelete(
		`/cloud/project/${serviceName}/kube/${kubeId}/ipRestrictions/${ip}`,
	);
	return this.helpers.returnJsonArray([{}]);
}
