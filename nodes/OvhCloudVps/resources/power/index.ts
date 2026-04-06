import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionPowerStart, executePowerStart } from './start.operation';
import { descriptionPowerStop, executePowerStop } from './stop.operation';
import { descriptionPowerReboot, executePowerReboot } from './reboot.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Power Operation',
			name: 'powerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Reboot',
					value: 'reboot',
				},
				{
					name: 'Start',
					value: 'start',
				},
				{
					name: 'Stop',
					value: 'stop',
				},
			],
			default: 'start',
			displayOptions,
		},
		...descriptionPowerStart({
			...displayOptions,
			show: { ...displayOptions?.show, powerOperation: ['start'] },
		}),
		...descriptionPowerStop({
			...displayOptions,
			show: { ...displayOptions?.show, powerOperation: ['stop'] },
		}),
		...descriptionPowerReboot({
			...displayOptions,
			show: { ...displayOptions?.show, powerOperation: ['reboot'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('powerOperation', 0) as string;

	switch (operation) {
		case 'start':
			return await executePowerStart.call(this);
		case 'stop':
			return await executePowerStop.call(this);
		case 'reboot':
			return await executePowerReboot.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "power" resource.`);
	}
}
