#!/bin/bash
set -euo pipefail

RESOURCE_NAME="$1"
DISPLAY_NAME="$2"
NODE_DIR="nodes/OvhCloud${RESOURCE_NAME}"
ACTION_DIR="nodes/OvhCloud/actions/${RESOURCE_NAME}"

# Check if source exists
if [ ! -d "$ACTION_DIR" ]; then
  echo "ERROR: Source directory $ACTION_DIR does not exist"
  exit 1
fi

# Create node directory
mkdir -p "$NODE_DIR"

# Copy action files
cp -r "$ACTION_DIR"/* "$NODE_DIR"/

# Fix ApiClient import paths - handle all depth levels
find "$NODE_DIR" -name '*.ts' -exec sed -i "s|'../../transport/ApiClient'|'../../shared/transport/ApiClient'|g" {} +
find "$NODE_DIR" -name '*.ts' -exec sed -i "s|'../../../transport/ApiClient'|'../../../shared/transport/ApiClient'|g" {} +
find "$NODE_DIR" -name '*.ts' -exec sed -i "s|'../../../../transport/ApiClient'|'../../../../shared/transport/ApiClient'|g" {} +
find "$NODE_DIR" -name '*.ts' -exec sed -i "s|'../../../../../transport/ApiClient'|'../../../../../shared/transport/ApiClient'|g" {} +

# Determine the operation param name and searchListMethod
# For simple resources: <resourceName>Operation
# The searchListMethod for serviceLocator is typically: get<ResourceName>Services or getServiceIds

# Capitalize first letter for class name
CLASS_NAME="OvhCloud$(echo "${RESOURCE_NAME}" | sed 's/^\(.\)/\U\1/')"
CAMEL_NAME="$(echo "${RESOURCE_NAME}" | sed 's/^\(.\)/\l\1/')"
OPERATION_PARAM="${CAMEL_NAME}Operation"

# Determine the searchListMethod based on resource type
SEARCH_METHOD="getServiceIds"
case "$RESOURCE_NAME" in
  vps) SEARCH_METHOD="getVpsServices" ;;
  email) SEARCH_METHOD="getEmailDomains" ;;
  dedicatedCloud) SEARCH_METHOD="getDedicatedCloudServices" ;;
  dedicatedCeph) SEARCH_METHOD="getDedicatedCephServices" ;;
  dedicatedCluster) SEARCH_METHOD="getDedicatedClusterServices" ;;
  dedicatedHousing) SEARCH_METHOD="getDedicatedHousingServices" ;;
  dedicatedNasha) SEARCH_METHOD="getDedicatedNashaServices" ;;
  dedicatedServer) SEARCH_METHOD="getDedicatedServerServices" ;;
esac

# Create the node file
cat > "$NODE_DIR/${CLASS_NAME}.node.ts" << NODEOF
import {
	IExecuteFunctions,
	NodeConnectionTypes,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeDescription,
} from 'n8n-workflow';
import { OvhCloudApiSecretName, OvhCloudIcon } from '../../shared/constants';
import { description, execute } from './index';
import { ${SEARCH_METHOD} } from '../../shared/methods/${SEARCH_METHOD}.method';

export class ${CLASS_NAME} implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'OVH Cloud ${DISPLAY_NAME}',
		name: 'ovhCloud${CAMEL_NAME}',
		icon: OvhCloudIcon,
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["${OPERATION_PARAM}"]}}',
		description: 'Manage OVH ${DISPLAY_NAME} services',
		defaults: {
			name: 'OVH Cloud ${DISPLAY_NAME}',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: OvhCloudApiSecretName,
				required: true,
			},
		],
		properties: [
			...description({}),
		],
	};

	methods = {
		listSearch: {
			${SEARCH_METHOD},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		for (let i = 0; i < items.length; i++) {
			const result = await execute.call(this);
			returnData.push(...Array.isArray(result) ? result : [result]);
		}

		return [returnData];
	}
}
NODEOF

echo "✓ Created node: $NODE_DIR/${CLASS_NAME}.node.ts"
