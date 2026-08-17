import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const referer = this.getNodeParameter('referer', _itemIndex ?? 0) as string;
	const qs: IDataObject = {};
	if (referer) qs['referer'] = referer;
	const data = (await getClient(this).httpGet(
		`/sms/${encodeURIComponent(serviceName)}/sendersAvailableForValidation`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data as IDataObject[]);
}
