import { SERVICE_NAME } from './serviceName';
import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

/** Create a new snapshot for the VPS. */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'Snapshot Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name of the snapshot (optional)',
			placeholder: 'my-snapshot',
			displayOptions,
		},
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const body: IDataObject = {};
	try {
		const nameParam = (this.getNodeParameter('name', itemIndex ?? 0) ?? '') as string;
		if (nameParam) body.name = nameParam;
	} catch {
		/* optional */
	}

	const data = (await client.httpPost(`/vps/${serviceName}/snapshot/create`, body)) as IDataObject;
	return this.helpers.returnJsonArray([{ ...data }]);
}
