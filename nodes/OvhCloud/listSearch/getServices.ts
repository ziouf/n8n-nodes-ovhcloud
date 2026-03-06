import { ILoadOptionsFunctions, INodeListSearchItems, INodeListSearchResult } from "n8n-workflow";
import { OvhCloudApiSecretName, OvhCredentialsType, signRequestOptions } from "../../../credentials/OvhCloudApi.credentials";


export async function getServices(
    this:ILoadOptionsFunctions, 
    // filter?: string,
): Promise<INodeListSearchResult> {
    const credentials = await this.getCredentials(OvhCloudApiSecretName) as OvhCredentialsType;
    const type = this.getNodeParameter('type', 0, { extractValue: true }) as string;

    const serviceIds = await this.helpers.httpRequestWithAuthentication.call(
        this, 
        OvhCloudApiSecretName, 
        signRequestOptions.call(this, credentials, {
            method: 'GET',
            url: `/services`,
            qs: {
                routes: type,
            },
            json: true,
        })
    );

    const results: INodeListSearchItems[] = [];

    for (const serviceId of serviceIds) {
        const service = await this.helpers.httpRequestWithAuthentication.call(
            this, 
            OvhCloudApiSecretName, 
            signRequestOptions.call(this, credentials, {
                method: 'GET',
                url: `/services/${serviceId}`,
                json: true,
            })
        );

        results.push({
            name: `${service.resource.product.name} - ${service.resource.displayName}`,
            value: service.serviceId,
        });
    }

    return { results };
}