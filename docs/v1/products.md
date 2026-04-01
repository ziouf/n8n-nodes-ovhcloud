# OVH Cloud Order Catalog Public API - Products v1

This document describes the structure and properties of the **Products** resource in the OVH Cloud Order Catalog Public API v1. It is intended for **developers** and **technical operators** working with OVH Cloud's commercial offerings and pricing models.

---

## Overview

- **API Version**: `1.0`
- **Resource Path**: `/products`
- **Base Path**: `https://eu.api.ovh.com/v1`
- **Namespace**: `order.catalog.public`

The **Products** resource provides detailed information about commercial offerings, including configurations, pricing, and technical specifications. It is primarily used for building order forms, pricing calculators, and service selection interfaces.

---

## Models

### Enums

#### `OvhSubsidiaryEnum`

**Description**: OVH subsidiaries.

**Values**:

| Value | Description    |
| ----- | -------------- |
| `CZ`  | Czech Republic |
| `DE`  | Germany        |
| `ES`  | Spain          |
| `EU`  | European Union |
| `FI`  | Finland        |
| `FR`  | France         |
| `GB`  | United Kingdom |
| `IE`  | Ireland        |
| `IT`  | Italy          |
| `LT`  | Lithuania      |
| `MA`  | Morocco        |
| `NL`  | Netherlands    |
| `PL`  | Poland         |
| `PT`  | Portugal       |
| `SN`  | Senegal        |
| `TN`  | Tunisia        |

---

#### `ContextTypeEnum`

**Description**: Application context of a promotion.

**Values**:

| Value      | Description      |
| ---------- | ---------------- |
| `discover` | Discover context |
| `standard` | Standard context |
| `welcome`  | Welcome context  |

---

#### `ReductionTypeEnum`

**Description**: Type of reduction.

**Values**:

| Value           | Description             |
| --------------- | ----------------------- |
| `fixed_amount`  | Fixed amount reduction  |
| `forced_amount` | Forced amount reduction |
| `percentage`    | Percentage reduction    |

---

#### `DurationUnitEnum`

**Description**: Unit corresponding to a duration range.

**Values**:

| Value   | Description |
| ------- | ----------- |
| `day`   | Day         |
| `hour`  | Hour        |
| `month` | Month       |
| `none`  | No unit     |

---

#### `GenericProductPricingCapacitiesEnum`

**Description**: Capacity of a pricing (type).

**Values**:

| Value          | Description               |
| -------------- | ------------------------- |
| `consumption`  | Consumption-based pricing |
| `detach`       | Detachable pricing        |
| `downgrade`    | Downgrade pricing         |
| `dynamic`      | Dynamic pricing           |
| `installation` | Installation pricing      |
| `renew`        | Renewal pricing           |
| `upgrade`      | Upgrade pricing           |

---

#### `GenericProductPricingStrategyEnum`

**Description**: Strategy of a Pricing.

**Values**:

| Value       | Description                   |
| ----------- | ----------------------------- |
| `stairstep` | Stairstep billing strategy    |
| `tiered`    | Tiered billing strategy       |
| `volume`    | Volume-based billing strategy |

---

#### `GenericProductPricingTypeEnum`

**Description**: Type of a pricing.

**Values**:

| Value         | Description               |
| ------------- | ------------------------- |
| `consumption` | Consumption-based pricing |
| `purchase`    | Purchase-based pricing    |
| `rental`      | Rental-based pricing      |

---

#### `BillingStrategyEnum`

**Description**: Enum values for Billing Strategy.

**Values**:

| Value        | Description                     |
| ------------ | ------------------------------- |
| `custom`     | Custom billing strategy         |
| `diff`       | Differential billing strategy   |
| `max`        | Maximum billing strategy        |
| `max_retain` | Maximum retain billing strategy |
| `ping`       | Ping billing strategy           |
| `sum`        | Sum billing strategy            |

---

#### `ProrataUnitEnum`

**Description**: Consumption prorata unit.

**Values**:

| Value   | Description |
| ------- | ----------- |
| `day`   | Day         |
| `hour`  | Hour        |
| `month` | Month       |
| `none`  | No unit     |

---

#### `PingEndPolicyEnum`

**Description**: Enum values for Ping End Policy.

**Values**:

| Value     | Description         |
| --------- | ------------------- |
| `full`    | Full consumption    |
| `prorata` | Prorata consumption |

---

#### `EndStrategyEnum`

**Description**: Strategy applicable at the end of the Engagement.

**Values**:

| Value                                    | Description                                       |
| ---------------------------------------- | ------------------------------------------------- |
| `CANCEL_SERVICE`                         | Cancel the service at the end of the engagement   |
| `REACTIVATE_ENGAGEMENT`                  | Reactivate the engagement                         |
| `STOP_ENGAGEMENT_FALLBACK_DEFAULT_PRICE` | Stop the engagement and fallback to default price |
| `STOP_ENGAGEMENT_KEEP_PRICE`             | Stop the engagement but keep the price            |

---

#### `TypeEnum` (Engagement Configuration)

**Description**: Engagement's type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic).

**Values**:

| Value      | Description      |
| ---------- | ---------------- |
| `periodic` | Periodic payment |
| `upfront`  | Upfront payment  |

---

### Structured Models

#### `Configuration`

**Description**: Describes the Configuration for a Commercial offer.

**Properties**:

| Property      | Type       | Description                                           |
| ------------- | ---------- | ----------------------------------------------------- |
| `isCustom`    | `boolean`  | Whether the value of this Configuration is custom     |
| `isMandatory` | `boolean`  | Whether this Configuration is mandatory               |
| `name`        | `string`   | Identifier of the Configuration                       |
| `values`      | `string[]` | Possible values for this Configuration, if not custom |

---

#### `ConsumptionConfiguration`

**Description**: Describes consumption configuration for a Plan.

**Properties**:

| Property          | Type                  | Description                                      |
| ----------------- | --------------------- | ------------------------------------------------ |
| `billingStrategy` | `BillingStrategyEnum` | Consumption billing strategy                     |
| `pingEndPolicy`   | `PingEndPolicyEnum`   | Consumption ping end policy used at end of usage |
| `prorataUnit`     | `ProrataUnitEnum`     | Consumption prorata unit                         |

---

#### `EngagementConfiguration`

**Description**: Configuration of an engagement triggered by a given pricing.

**Properties**:

| Property           | Type              | Description                                                                                                |
| ------------------ | ----------------- | ---------------------------------------------------------------------------------------------------------- |
| `defaultEndAction` | `EndStrategyEnum` | Default action executed once the engagement is fully consumed                                              |
| `duration`         | `duration`        | Engagement's duration                                                                                      |
| `type`             | `TypeEnum`        | Engagement type, either fully pre-paid (upfront) or periodically paid up to engagement duration (periodic) |

---

#### `Pricing`

**Description**: Describes a Pricing for a Commercial offer.

**Properties**:

| Property                  | Type                                    | Description                                                            |
| ------------------------- | --------------------------------------- | ---------------------------------------------------------------------- |
| `capacities`              | `GenericProductPricingCapacitiesEnum[]` | Capacities of the Pricing, describes what the Pricing can be used for  |
| `commitment`              | `long`                                  | Engagement period                                                      |
| `description`             | `string`                                | Pricing description                                                    |
| `engagementConfiguration` | `EngagementConfiguration`               | Engagement Configuration                                               |
| `interval`                | `long`                                  | Length of the interval                                                 |
| `intervalUnit`            | `DurationUnitEnum`                      | Unit of the interval                                                   |
| `mode`                    | `string`                                | Pricing mode                                                           |
| `mustBeCompleted`         | `boolean`                               | Pricing must be completed                                              |
| `phase`                   | `long`                                  | Phase for the Pricing                                                  |
| `price`                   | `long`                                  | Price, in micro-cents                                                  |
| `promotions`              | `Promotion[]`                           | Promotions                                                             |
| `quantity`                | `PricingMinMax`                         | Describes how many times the Commercial offer can be added to the Cart |
| `repeat`                  | `PricingMinMax`                         | Describes how many times the interval can be repeated                  |
| `strategy`                | `GenericProductPricingStrategyEnum`     | Pricing strategy                                                       |
| `tax`                     | `long`                                  | Tax that can be applied, in micro-cents                                |
| `type`                    | `GenericProductPricingTypeEnum`         | Pricing type                                                           |

---

#### `PricingMinMax`

**Description**: Describes minimal and maximal values for a Pricing.

**Properties**:

| Property | Type   | Description   |
| -------- | ------ | ------------- |
| `max`    | `long` | Maximal value |
| `min`    | `long` | Minimal value |

---

#### `Product`

**Description**: Describes a Product attached to a Commercial offer.

**Properties**:

| Property         | Type              | Description                                               |
| ---------------- | ----------------- | --------------------------------------------------------- |
| `blobs`          | `ProductBlob`     | Product blobs                                             |
| `configurations` | `Configuration[]` | List of possible Configurations for this Commercial offer |
| `description`    | `string`          | Description of the Product                                |
| `name`           | `string`          | Identifier of the Product                                 |

---

#### `ProductBlob`

**Description**: Describes a Blob.

**Properties**:

| Property     | Type                    | Description                                         |
| ------------ | ----------------------- | --------------------------------------------------- |
| `commercial` | `ProductBlobCommercial` | Commercial information for Dedicated Server Product |
| `marketing`  | `ProductBlobMarketing`  | Marketing information for VPS Product               |
| `meta`       | `ProductBlobMeta`       | Meta blobs for VPS Product                          |
| `tags`       | `string[]`              | Tags                                                |
| `technical`  | `ProductBlobTechnical`  | Technical information for Dedicated Server Product  |
| `value`      | `string`                | Value for meta blobs                                |

---

#### `ProductBlobCommercial`

**Description**: Describes a Commercial blob.

**Properties**:

| Property       | Type                              | Description   |
| -------------- | --------------------------------- | ------------- |
| `brick`        | `string`                          | Brick         |
| `brickSubtype` | `string`                          | Brick subtype |
| `connection`   | `ProductBlobConnection`           | Connection    |
| `features`     | `ProductBlobCommercialFeatures[]` | Features      |
| `line`         | `string`                          | Line          |
| `name`         | `string`                          | Name          |
| `price`        | `ProductBlobCommercialPrice`      | Price         |
| `range`        | `string`                          | Range         |

---

#### `ProductBlobCommercialFeatures`

**Description**: Describes Features for a commercial blob.

**Properties**:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| `name`   | `string` | Name        |
| `value`  | `string` | Value       |

---

#### `ProductBlobCommercialPrice`

**Description**: Describes a Price for a commercial blob.

**Properties**:

| Property    | Type                                | Description |
| ----------- | ----------------------------------- | ----------- |
| `display`   | `ProductBlobCommercialPriceDisplay` | Display     |
| `interval`  | `string`                            | Interval    |
| `precision` | `long`                              | Precision   |
| `unit`      | `string`                            | Unit        |

---

#### `ProductBlobCommercialPriceDisplay`

**Description**: Describes a Display a price.

**Properties**:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| `value`  | `string` | Value       |

---

#### `ProductBlobConnection`

**Description**: Describes a Connection for a blob for a Dedicated Server.

**Properties**:

| Property  | Type                           | Description |
| --------- | ------------------------------ | ----------- |
| `clients` | `ProductBlobConnectionClients` | Clients     |
| `total`   | `long`                         | Total       |

---

#### `ProductBlobConnectionClients`

**Description**: Describes Clients for a Connection for a blob for a Dedicated Server.

**Properties**:

| Property      | Type   | Description |
| ------------- | ------ | ----------- |
| `concurrency` | `long` | Concurrency |
| `number`      | `long` | Number      |

---

#### `ProductBlobMarketing`

**Description**: Describes a Marketing blob.

**Properties**:

| Property  | Type                            | Description                                   |
| --------- | ------------------------------- | --------------------------------------------- |
| `content` | `ProductBlobMarketingContent[]` | Marketing content information for VPS Product |

---

#### `ProductBlobMarketingContent`

**Description**: Describes a Content for a Marketing blob.

**Properties**:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| `key`    | `string` | Key         |
| `value`  | `string` | Value       |

---

#### `ProductBlobMeta`

**Description**: Describes a Meta blob.

**Properties**:

| Property         | Type                              | Description    |
| ---------------- | --------------------------------- | -------------- |
| `configurations` | `ProductBlobMetaConfigurations[]` | Configurations |

---

#### `ProductBlobMetaConfigurations`

**Description**: Describes a Configuration for a meta blob.

**Properties**:

| Property | Type                                    | Description |
| -------- | --------------------------------------- | ----------- |
| `name`   | `string`                                | Name        |
| `values` | `ProductBlobMetaConfigurationsValues[]` | Values      |

---

#### `ProductBlobMetaConfigurationsValues`

**Description**: Describes a Values configuration for a meta blob.

**Properties**:

| Property | Type          | Description |
| -------- | ------------- | ----------- |
| `blobs`  | `ProductBlob` | Blobs       |
| `value`  | `string`      | Value       |

---

#### `ProductBlobTechnical`

**Description**: Describes a Technical Blob.

**Properties**:

| Property                | Type                                   | Description             |
| ----------------------- | -------------------------------------- | ----------------------- |
| `bandwidth`             | `ProductBlobTechnicalNetwork`          | Network information     |
| `connection`            | `ProductBlobConnection`                | Connection              |
| `connectionPerSeconds`  | `ProductBlobTechnicalPerSeconds`       | Connection per seconds  |
| `cpu`                   | `ProductBlobTechnicalCPU`              | CPU information         |
| `datacenter`            | `ProductBlobTechnicalDatacenter`       | Datacenter              |
| `ephemeralLocalStorage` | `ProductBlobTechnicalEphemeralStorage` | Ephemeral local storage |
| `gpu`                   | `ProductBlobTechnicalGPU`              | GPU information         |
| `license`               | `ProductBlobTechnicalLicense`          | License information     |
| `memory`                | `ProductBlobTechnicalMemory`           | Memory information      |
| `name`                  | `string`                               | Name                    |
| `nodes`                 | `ProductBlobTechnicalNodes`            | Nodes                   |
| `nvme`                  | `ProductBlobTechnicalNvme`             | NVME                    |
| `os`                    | `ProductBlobTechnicalOS`               | OS                      |
| `provider`              | `ProductBlobTechnicalProvider`         | Provider                |
| `server`                | `ProductBlobTechnicalServer`           | Hardware information    |
| `storage`               | `ProductBlobTechnicalStorage`          | Disks information       |
| `throughput`            | `ProductBlobTechnicalThroughput`       | Throughput              |
| `virtualization`        | `ProductBlobTechnicalVirtualization`   | Virtualization          |
| `volume`                | `ProductBlobTechnicalVolume`           | Volume                  |
| `vrack`                 | `ProductBlobTechnicalNetwork`          | vRack information       |

---

#### `ProductBlobTechnicalCPU`

**Description**: Describes a CPU for a technical blob.

**Properties**:

| Property       | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| `boost`        | `double`  | CPU Boost                       |
| `brand`        | `string`  | CPU Brand                       |
| `cores`        | `long`    | Number of cores                 |
| `customizable` | `boolean` | Customizable                    |
| `frequency`    | `double`  | Frequency of CPU in GHz         |
| `maxFrequency` | `double`  | Maximum frequency of CPU in GHz |
| `model`        | `string`  | Displayable name                |
| `number`       | `long`    | Number of CPU                   |
| `score`        | `long`    | CPU score                       |
| `threads`      | `long`    | Number of threads               |
| `type`         | `string`  | Type of CPU                     |

---

#### `ProductBlobTechnicalDatacenter`

**Description**: Describes a Datacenter for a technical Blob.

**Properties**:

| Property      | Type                | Description  |
| ------------- | ------------------- | ------------ |
| `city`        | `string`            | City         |
| `country`     | `string`            | Country      |
| `countryCode` | `OvhSubsidiaryEnum` | Country code |
| `name`        | `string`            | Name         |
| `region`      | `string`            | Region       |

---

#### `ProductBlobTechnicalDisk`

**Description**: Describes a Disk for a technical blob.

**Properties**:

| Property          | Type     | Description                 |
| ----------------- | -------- | --------------------------- |
| `capacity`        | `double` | Disk capacity in Gb         |
| `interface`       | `string` | Disk interface              |
| `iops`            | `long`   | Iops                        |
| `maximumCapacity` | `double` | Maximum disk capacity in Gb |
| `number`          | `long`   | Number of disks             |
| `sizeUnit`        | `string` | Size unit                   |
| `specs`           | `string` | Disk specs                  |
| `technology`      | `string` | Disk technology             |
| `usage`           | `string` | Usage information           |

---

#### `ProductBlobTechnicalEphemeralStorage`

**Description**: Describes an Ephemeral Storage for technical blob.

**Properties**:

| Property | Type                         | Description     |
| -------- | ---------------------------- | --------------- |
| `disks`  | `ProductBlobTechnicalDisk[]` | Disk properties |

---

#### `ProductBlobTechnicalGPU`

**Description**: Describes a GPU for a technical blob.

**Properties**:

| Property      | Type                         | Description     |
| ------------- | ---------------------------- | --------------- |
| `brand`       | `string`                     | GPU brand       |
| `memory`      | `ProductBlobTechnicalMemory` | GPU memory size |
| `model`       | `string`                     | GPU model       |
| `number`      | `long`                       | GPU number      |
| `performance` | `double`                     | GPU performance |

---

#### `ProductBlobTechnicalLicense`

**Description**: Describes a License for a technical Blob.

**Properties**:

| Property       | Type                               | Description         |
| -------------- | ---------------------------------- | ------------------- |
| `application`  | `string`                           | Application         |
| `cores`        | `ProductBlobTechnicalLicenseCores` | Cores information   |
| `distribution` | `string`                           | Network information |
| `edition`      | `string`                           | Edition information |
| `family`       | `string`                           | Family              |
| `feature`      | `string`                           | Feature             |
| `flavor`       | `string`                           | Flavor information  |
| `images`       | `string[]`                         | Images information  |
| `nbOfAccount`  | `long`                             | Number of accounts  |
| `package`      | `string`                           | Package             |
| `version`      | `string`                           | Version information |

---

#### `ProductBlobTechnicalLicenseCores`

**Description**: Describes license cores for a technical blob.

**Properties**:

| Property | Type   | Description     |
| -------- | ------ | --------------- |
| `number` | `long` | Number of cores |
| `total`  | `long` | Total of cores  |

---

#### `ProductBlobTechnicalMemory`

**Description**: Describes a Memory technical Blob.

**Properties**:

| Property       | Type      | Description           |
| -------------- | --------- | --------------------- |
| `customizable` | `boolean` | Customizable          |
| `ecc`          | `boolean` | ECC                   |
| `frequency`    | `long`    | RAM Frequency         |
| `interface`    | `string`  | Interface             |
| `ramType`      | `string`  | RAM Type (DDRx...)    |
| `size`         | `double`  | Size of the RAM in Gb |
| `sizeUnit`     | `string`  | Size unit             |

---

#### `ProductBlobTechnicalNetwork`

**Description**: Describes a Network technical Blob.

**Properties**:

| Property     | Type      | Description        |
| ------------ | --------- | ------------------ |
| `burst`      | `long`    | Network burst      |
| `capacity`   | `long`    | Network capacity   |
| `guaranteed` | `boolean` | Guaranteed Network |
| `interfaces` | `long`    | Network interfaces |
| `isMax`      | `boolean` | Is max?            |
| `level`      | `double`  | Network level      |
| `limit`      | `long`    | Network limit      |
| `max`        | `double`  | Maximum            |
| `maxUnit`    | `string`  | Unit of maximum    |
| `shared`     | `boolean` | Shared             |
| `traffic`    | `long`    | Traffic            |
| `unit`       | `string`  | Unit               |
| `unlimited`  | `boolean` | Unlimited          |

---

#### `ProductBlobTechnicalNodes`

**Description**: Describes a Node for technical blob.

**Properties**:

| Property | Type   | Description     |
| -------- | ------ | --------------- |
| `number` | `long` | Number of nodes |

---

#### `ProductBlobTechnicalNvme`

**Description**: Describes a NVME for technical blob.

**Properties**:

| Property | Type                         | Description     |
| -------- | ---------------------------- | --------------- |
| `disks`  | `ProductBlobTechnicalDisk[]` | Disk properties |

---

#### `ProductBlobTechnicalOS`

**Description**: Describes an OS for a technical blob.

**Properties**:

| Property       | Type     | Description  |
| -------------- | -------- | ------------ |
| `distribution` | `string` | Distribution |
| `edition`      | `string` | Edition      |
| `family`       | `string` | Family       |
| `version`      | `string` | Version      |

---

#### `ProductBlobTechnicalPerSeconds`

**Description**: Describes a Per-Seconds technical blob.

**Properties**:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| `limit`  | `long`   | Limit       |
| `max`    | `double` | Maximum     |

---

#### `ProductBlobTechnicalProvider`

**Description**: Describes a Provider technical Blob.

**Properties**:

| Property | Type     | Description   |
| -------- | -------- | ------------- |
| `name`   | `string` | Provider name |
| `url`    | `string` | Provider URL  |

---

#### `ProductBlobTechnicalServer`

**Description**: Describes a Server technical Blob.

**Properties**:

| Property | Type     | Description  |
| -------- | -------- | ------------ |
| `model`  | `string` | Server model |

---

#### `ProductBlobTechnicalStorage`

**Description**: Describes a Storage technical Blob.

**Properties**:

| Property     | Type     | Description       |
| ------------ | -------- | ----------------- |
| `capacity`   | `double` | Capacity in Gb    |
| `interface`  | `string` | Interface         |
| `number`     | `long`   | Number of disks   |
| `sizeUnit`   | `string` | Size unit         |
| `specs`      | `string` | Disk specs        |
| `technology` | `string` | Disk technology   |
| `usage`      | `string` | Usage information |

---

#### `ProductBlobTechnicalThroughput`

**Description**: Describes a Throughput technical blob.

**Properties**:

| Property | Type     | Description |
| -------- | -------- | ----------- |
| `limit`  | `long`   | Limit       |
| `max`    | `double` | Maximum     |

---

#### `ProductBlobTechnicalVirtualization`

**Description**: Describes a Virtualization technical Blob.

**Properties**:

| Property | Type     | Description         |
| -------- | -------- | ------------------- |
| `type`   | `string` | Virtualization type |

---

#### `ProductBlobTechnicalVolume`

**Description**: Describes a Volume technical Blob.

**Properties**:

| Property     | Type     | Description     |
| ------------ | -------- | --------------- |
| `capacity`   | `double` | Capacity in Gb  |
| `interface`  | `string` | Interface       |
| `number`     | `long`   | Number of disks |
| `sizeUnit`   | `string` | Size unit       |
| `specs`      | `string` | Disk specs      |
| `technology` | `string` | Disk technology |

---

## Usage Examples

### Example 1: Fetching Products

To fetch a list of available products, you can use the following API call:

```bash
curl -X GET "https://eu.api.ovh.com/v1/products" \
  -H "X-OVH-API-Key: $APPLICATION_KEY" \
  -H "X-OVH-Application: $APPLICATION_SECRET" \
  -H "X-OVH-Timestamp: $(date +%s)" \
  -H "X-OVH-Signature: $SIGNATURE"
```

**Note**: Replace `$APPLICATION_KEY`, `$APPLICATION_SECRET`, and `$SIGNATURE` with your actual OVH API credentials.

---

### Example 2: Filtering by Subsidiary

To filter products by a specific OVH subsidiary (e.g., `FR` for France), use the `countryCode` parameter in the `ProductBlobTechnicalDatacenter` model:

```json
{
    "datacenter": {
        "countryCode": "FR"
    }
}
```

---

### Example 3: Pricing with Engagement Configuration

To retrieve a pricing model with an engagement configuration, use the `EngagementConfiguration` model:

```json
{
    "pricing": {
        "type": "consumption",
        "engagementConfiguration": {
            "type": "upfront",
            "duration": 12,
            "defaultEndAction": "CANCEL_SERVICE"
        }
    }
}
```

---

## Error Handling

The API uses `NodeApiError` for n8n-specific errors. Ensure you validate inputs before making API calls and handle errors gracefully with meaningful messages.

### Common Error Cases

1. **Invalid Credentials**: Ensure `X-OVH-API-Key`, `X-OVH-Application`, and `X-OVH-Signature` are valid and correctly signed.
2. **Missing Parameters**: Validate required parameters like `countryCode`, `serviceId`, or `pricingType` before making requests.
3. **Unsupported Operations**: Some operations may not be supported in certain subsidiaries or for specific product types.

---

## Security Considerations

- **Authentication**: Always use signed requests with the OVH API signature algorithm (SHA1).
- **Data Validation**: Validate all inputs and outputs to prevent injection or parsing errors.
- **Rate Limiting**: Monitor request rates to avoid hitting API limits.
- **Consumer Key**: Ensure the consumer key is correctly scoped and not overprivileged.

---

## References

- [OVH Cloud API Documentation](https://eu.api.ovh.com/v1)
- [n8n Node Development Guidelines](https://github.com/lemonade-n8n/n8n-nodes-ovhcloud/blob/main/AGENTS.md)
- [TypeScript Configuration](https://github.com/lemonade-n8n/n8n-nodes-ovhcloud/blob/main/AGENTS.md#typescript-configuration)

---

**Documentation Version**: 1.0
**Last Updated**: 2026-03-31
**Status**: Draft

**Note**: This documentation is generated from the API schema and is intended for technical reference. For end-user documentation, consider simplifying the structure and providing more examples of typical usage scenarios.
