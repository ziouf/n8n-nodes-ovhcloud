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
	/**
	 * La fonction description de l'opération (accepte un displayOptions requis).
	 *
	 * Le type de retour est volontairement large (`unknown[]`): de nombreuses
	 * opérations n'annotent pas leur `description` et TS infère un tableau union
	 * non assignable à `INodeProperties[]` ; le dispatcher normalise une fois
	 * pour toutes le résultat vers `INodeProperties[]` (équivalent du `as
	 * INodeProperties[]` répété à chaque site d'appel dans les index manuels).
	 */
	description: (displayOptions: IDisplayOptions) => unknown[];
}

export interface OperationDispatcher {
	description(displayOptions?: IDisplayOptions): INodeProperties[];
	execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]>;
}

export interface OperationDispatcherOptions {
	/**
	 * Explicit default value for the Operation dropdown. When omitted, the
	 * first entry marked `default` wins, falling back to the first entry.
	 */
	defaultOperation?: string;
	/**
	 * When true, the Operation dropdown has no default value (`default:
	 * undefined`). Useful to preserve the behaviour of nodes that currently
	 * ship without a preselected operation.
	 */
	noDefault?: boolean;
}

export function createOperationDispatcher(
	operationParam: string,
	resource: string,
	entries: OperationEntry[],
	options: OperationDispatcherOptions = {},
): OperationDispatcher {
	function description(displayOptions: IDisplayOptions = {}): INodeProperties[] {
		const operationProperties: INodeProperties[] = [
			{
				displayName: 'Operation',
				name: operationParam,
				type: 'options',
				noDataExpression: true,
				options: entries.map(({ name, value, action }) => ({ name, value, action })),
				default: options.noDefault
					? undefined
					: (options.defaultOperation ??
						(entries.find((e) => e.default) ?? entries[0]).value),
				...(Object.keys(displayOptions).length > 0 ? { displayOptions } : {}),
			},
		];

		return [
			...operationProperties,
			...entries.flatMap((entry) => {
				const props =
					entry.show === false
						? entry.description({} as IDisplayOptions)
						: entry.description({
								...displayOptions,
								show: { [operationParam]: [entry.value] },
							});
				return (props ?? []) as unknown as INodeProperties[];
			}),
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
