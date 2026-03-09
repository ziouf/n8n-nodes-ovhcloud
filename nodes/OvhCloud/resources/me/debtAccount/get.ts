import { IDisplayOptions, IExecuteFunctions, INodeExecutionData, INodeProperties } from "n8n-workflow";
import { OvhCloudApiClient } from "../../../shared/OvhCloudApiClient";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
    return [];
}

export async function execute(
    this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
    const client = new OvhCloudApiClient(this);
    return await client.httpGet(`/me/debtAccount`);
}