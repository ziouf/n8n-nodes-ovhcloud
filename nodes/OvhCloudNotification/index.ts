/**
 * @brief Notification resource operations for n8n node (V2 API)
 *
 * Provides operations for managing OVH notifications including:
 * - List all notifications
 * - Get detailed information about a specific notification
 * - Manage contact means, history, references, and routing
 *
 * Available operations:
 * - `list`: List all notifications
 * - `get`: Get details of a specific notification
 * - `listContactMeans`: List notification contact means
 * - `getContactMean`: Get a specific contact mean
 * - `listHistories`: List notification histories
 * - `getHistory`: Get a specific history
 * - `listReferences`: List notification references
 * - `getReference`: Get a specific reference
 * - `listRoutings`: List notification routings
 * - `getRouting`: Get a specific routing
 *
 * @remarks
 * Notifications are managed under `/v2/notification` route.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import * as resources from './resources';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Notification Operation',
			name: 'notificationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a notification',
				},
				{
					name: 'Get Contact Mean',
					value: 'getContactMean',
					action: 'Get a specific contact mean',
				},
				{
					name: 'Get History',
					value: 'getHistory',
					action: 'Get a specific history',
				},
				{
					name: 'Get Reference',
					value: 'getReference',
					action: 'Get a specific reference',
				},
				{
					name: 'Get Routing',
					value: 'getRouting',
					action: 'Get a specific routing',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all notifications',
				},
				{
					name: 'List Contact Means',
					value: 'listContactMeans',
					action: 'List notification contact means',
				},
				{
					name: 'List Histories',
					value: 'listHistories',
					action: 'List notification histories',
				},
				{
					name: 'List References',
					value: 'listReferences',
					action: 'List notification references',
				},
				{
					name: 'List Routings',
					value: 'listRoutings',
					action: 'List notification routings',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['get'] },
		}),
		...resources.contactMean.descriptionListNotificationContactMeans({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['listContactMeans'] },
		}),
		...resources.contactMean.descriptionGetNotificationContactMean({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['getContactMean'] },
		}),
		...resources.history.descriptionListNotificationHistories({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['listHistories'] },
		}),
		...resources.history.descriptionGetNotificationHistory({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['getHistory'] },
		}),
		...resources.reference.descriptionListNotificationReferences({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['listReferences'] },
		}),
		...resources.reference.descriptionGetNotificationReference({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['getReference'] },
		}),
		...resources.routing.descriptionListNotificationRoutings({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['listRoutings'] },
		}),
		...resources.routing.descriptionGetNotificationRouting({
			...displayOptions,
			show: { ...displayOptions?.show, notificationOperation: ['getRouting'] },
		}),
	];
}

/**
 * Executes the selected notification operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('notificationOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'listContactMeans':
			return await resources.contactMean.executeListNotificationContactMeans.call(this);
		case 'getContactMean':
			return await resources.contactMean.executeGetNotificationContactMean.call(this);
		case 'listHistories':
			return await resources.history.executeListNotificationHistories.call(this);
		case 'getHistory':
			return await resources.history.executeGetNotificationHistory.call(this);
		case 'listReferences':
			return await resources.reference.executeListNotificationReferences.call(this);
		case 'getReference':
			return await resources.reference.executeGetNotificationReference.call(this);
		case 'listRoutings':
			return await resources.routing.executeListNotificationRoutings.call(this);
		case 'getRouting':
			return await resources.routing.executeGetNotificationRouting.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "notification"`);
}
