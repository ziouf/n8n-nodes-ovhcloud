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
			displayName: 'Receivers',
			name: 'receivers',
			type: 'string',
			default: '',
			description: 'Receivers (comma-separated list)',
			displayOptions,
		},
		{
			displayName: 'Receivers Document URL',
			name: 'receiversDocumentUrl',
			type: 'string',
			default: '',
			description: 'The receivers document URL link in csv format',
			displayOptions,
		},
	];
}

/**
 * Executes the Post /sms/{serviceName}/hlr operation.
 *
 * HTTP method: POST
 * Endpoint: /sms/{serviceName}/hlr
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;
	const receivers = this.getNodeParameter('receivers', _itemIndex ?? 0) as string;
	const receiversDocumentUrl = this.getNodeParameter('receiversDocumentUrl', _itemIndex ?? 0) as string;
	const body: IDataObject = {};
	if (receivers) body['receivers'] = (receivers as string).split(',').map((r: string) => r.trim());
	if (receiversDocumentUrl) body['receiversDocumentUrl'] = receiversDocumentUrl;
	const data = (await new ApiClient(this).httpPost(
		`/sms/${encodeURIComponent(serviceName)}/hlr`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data as IDataObject]);
}
