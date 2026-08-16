import type { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

export interface OperationEntry {
	/** Valeur de l'action dans le dropdown (ex: 'get'). */
	value: string;
	/** Libellé du dropdown (ex: 'Get VPS'). */
	name: string;
	/** Action affichée sous l'option (ex: 'Get VPS service details'). */
	action: string;
	/** true si c'est l'opération par défaut du dropdown. */
	default?: boolean;
	/** false si les propriétés de l'opération ne sont PAS conditionnées par show (pattern existant: descriptionXxx() appelé sans displayOptions). */
	show?: boolean;
	/** La fonction execute de l'opération. */
	execute: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>;
	/** La fonction description de l'opération. */
	description: (displayOptions?: IDisplayOptions) => INodeProperties[];
}

export interface OperationDispatcher {
	description(displayOptions: IDisplayOptions): INodeProperties[];
	execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]>;
}

export function createOperationDispatcher(
	operationParam: string,
	resource: string,
	entries: OperationEntry[],
): OperationDispatcher {
	function description(displayOptions: IDisplayOptions): INodeProperties[] {
		const operationProperties: INodeProperties[] = [
			{
				displayName: 'Operation',
				name: operationParam,
				type: 'options',
				noDataExpression: true,
				options: entries.map(({ name, value, action }) => ({ name, value, action })),
				default: (entries.find((e) => e.default) ?? entries[0]).value,
				...(Object.keys(displayOptions).length > 0 ? { displayOptions } : {}),
			},
		];

		return [
			...operationProperties,
			...entries.flatMap((entry) =>
				entry.show === false
					? (entry.description() ?? [])
					: (entry.description({ ...displayOptions, show: { [operationParam]: [entry.value] } }) ?? []),
			),
		];
	}

	async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
		const operation = this.getNodeParameter(operationParam, itemIndex ?? 0, { extractValue: true });
		const entry = entries.find((e) => e.value === operation);
		if (!entry) {
			throw new Error(`Unsupported operation "${operation}" for resource "${resource}"`);
		}
		return entry.execute.call(this, itemIndex ?? 0);
	}

	return { description, execute };
}
