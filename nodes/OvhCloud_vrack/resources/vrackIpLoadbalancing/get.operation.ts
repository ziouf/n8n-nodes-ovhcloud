/**
 * @brief Placeholder get operation for vRack IP Loadbalancing
 *
 * This sub-resource does not have a get operation.
 */
import { INodeProperties, IDisplayOptions } from 'n8n-workflow';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [];
}

export async function execute(): Promise<never> {
	throw new Error('Get operation is not supported for resource "vrackIpLoadbalancing"');
}
