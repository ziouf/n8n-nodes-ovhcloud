import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getSmsServices',
				displayName: 'Service Name',
				description: 'The internal name of your SMS offer',
				placeholder: 'sms-XXXXXX-1',
			}),
			displayOptions,
		},
		{
			displayName: 'Referer',
			name: 'referer',
			type: 'string',
			default: '',
			description: 'Information type (allowed values: domain, nichandle)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get /sms/{serviceName}/sendersAvailableForValidation operation.
 *
 * HTTP method: GET
 * Endpoint: /sms/{serviceName}/sendersAvailableForValidation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0, '', { extractValue: true }) as string;
	const referer = this.getNodeParameter('referer', 0) as string;
	const qs: IDataObject = {};
	if (referer) qs['referer'] = referer;
	const data = (await new ApiClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/sendersAvailableForValidation`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data as IDataObject[]);
}
