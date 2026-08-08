import type { INodeProperties } from 'n8n-workflow';

export interface ServiceNameLocatorOptions {
	/** Name of the node parameter (default 'serviceName'). */
	parameterName?: string;
	/** Display name shown in the UI (default 'Service Name'). */
	displayName?: string;
	/** Description shown under the field. */
	description?: string;
	/** Placeholder for the free-text mode. */
	placeholder?: string;
	/** searchListMethod used by the 'From List' mode. */
	searchListMethod: string;
	/** Whether the list mode is searchable (default true). */
	searchable?: boolean;
	/** Extra `typeOptions` merged into the list mode. */
	extraTypeOptions?: Record<string, unknown>;
}

/** Shared resourceLocator factory for OVH service names. */
export function serviceNameLocator(options: ServiceNameLocatorOptions): INodeProperties {
	const {
		parameterName = 'serviceName',
		displayName = 'Service Name',
		description = 'The OVH service name',
		placeholder = 'service',
		searchListMethod,
		searchable = true,
		extraTypeOptions = {},
	} = options;

	return {
		displayName,
		name: parameterName,
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description,
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod, searchable, ...extraTypeOptions },
			},
			{
				displayName: 'By Name',
				name: 'name',
				type: 'string',
				placeholder,
			},
		],
	};
}

export interface ProjectIdLocatorOptions {
	parameterName?: string;
	displayName?: string;
	description?: string;
	placeholder?: string;
}

/** Shared resourceLocator factory for Public Cloud project IDs. */
export function projectIdLocator(options?: ProjectIdLocatorOptions): INodeProperties {
	const {
		parameterName = 'publicCloudProjectId',
		displayName = 'Public Cloud Project',
		description = 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
		placeholder = '12345678-1234-1234-1234-1234567890ab',
	} = options ?? {};

	return {
		displayName,
		name: parameterName,
		type: 'resourceLocator',
		default: { mode: 'list', value: '' },
		required: true,
		description,
		modes: [
			{
				displayName: 'From List',
				name: 'list',
				type: 'list',
				typeOptions: { searchListMethod: 'getPublicCloudProjects', searchable: true },
			},
			{
				displayName: 'By ID',
				name: 'name',
				type: 'string',
				placeholder,
			},
		],
	};
}
