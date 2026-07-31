# OVH Cloud Order

> Manage orders — carts, catalogs, upgrades, dedicated, telephony, licenses, emails, VPS

## Overview

This node provides **168 operations** with **166 tests** for managing OVHcloud resources.

## Available Operations

### cart

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`cartCouponCreatePost`](./`cart/cartCouponCreatePost.ts`) | POST | `/order/cart/{...}/coupon` | 1 |
| [`cartCouponListGet`](./`cart/cartCouponListGet.ts`) | GET | `/order/cart/{...}/coupon` | 1 |
| [`cartCreatePost`](./`cart/cartCreatePost.ts`) | POST | `...` | 1 |
| [`cartDeleteDelete`](./`cart/cartDeleteDelete.ts`) | DELETE | `/order/cart/{...}` | 1 |
| [`cartGetGet`](./`cart/cartGetGet.ts`) | GET | `/order/cart/{...}` | 1 |
| [`cartItemConfigurationCreatePost`](./`cart/cartItemConfigurationCreatePost.ts`) | POST | `/order/cart/{...}/item/{...}/configuration` | 1 |
| [`cartItemConfigurationDeleteDelete`](./`cart/cartItemConfigurationDeleteDelete.ts`) | DELETE | `/order/cart/{...}/item/{...}/configuration/{...}` | 1 |
| [`cartItemConfigurationGetGet`](./`cart/cartItemConfigurationGetGet.ts`) | GET | `/order/cart/{...}/item/{...}/configuration/{...}` | 1 |
| [`cartItemConfigurationListGet`](./`cart/cartItemConfigurationListGet.ts`) | GET | `/order/cart/{...}/item/{...}/configuration` | 1 |
| [`cartItemDeleteDelete`](./`cart/cartItemDeleteDelete.ts`) | DELETE | `/order/cart/{...}/item/{...}` | 1 |
| [`cartItemGetGet`](./`cart/cartItemGetGet.ts`) | GET | `/order/cart/{...}/item/{...}` | 1 |
| [`cartItemListGet`](./`cart/cartItemListGet.ts`) | GET | `/order/cart/{...}/item` | 1 |
| [`cartItemRequiredConfigurationListGet`](./`cart/cartItemRequiredConfigurationListGet.ts`) | GET | `/order/cart/{...}/item/{...}/requiredConfiguration` | 1 |
| [`cartItemUpdatePut`](./`cart/cartItemUpdatePut.ts`) | PUT | `/order/cart/{...}/item/{...}` | 1 |
| [`cartListGet`](./`cart/cartListGet.ts`) | GET | `...` | 1 |
| [`cartSummaryGet`](./`cart/cartSummaryGet.ts`) | GET | `/order/cart/{...}/summary` | 1 |
| [`cartSupportCreatePost`](./`cart/cartSupportCreatePost.ts`) | POST | `/order/cart/{...}/support` | 1 |
| [`cartSupportListGet`](./`cart/cartSupportListGet.ts`) | GET | `/order/cart/{...}/support` | 1 |
| [`cartUpdatePut`](./`cart/cartUpdatePut.ts`) | PUT | `/order/cart/{...}` | 1 |

### catalog

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`catalogPublicGet`](./`catalog/catalogPublicGet.ts`) | GET | `/order/catalog/public/{...}` | 0 |
| [`catalogPublicOptionsGet`](./`catalog/catalogPublicOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 0 |
| [`domainGet`](./`catalog/domainGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`domainOptionsGet`](./`catalog/domainOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`ecoGet`](./`catalog/ecoGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`ecoOptionsGet`](./`catalog/ecoOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`emailDomainGet`](./`catalog/emailDomainGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`emailDomainOptionsGet`](./`catalog/emailDomainOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`emailproGet`](./`catalog/emailproGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`emailproOptionsGet`](./`catalog/emailproOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`exchangeGet`](./`catalog/exchangeGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`exchangeOptionsGet`](./`catalog/exchangeOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`ipLoadbalancingGet`](./`catalog/ipLoadbalancingGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`ipLoadbalancingOptionsGet`](./`catalog/ipLoadbalancingOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`licensecPanelGet`](./`catalog/licensecPanelGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`licensecPanelOptionsGet`](./`catalog/licensecPanelOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`licenseHycuGet`](./`catalog/licenseHycuGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`licenseHycuOptionsGet`](./`catalog/licenseHycuOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`licensePleskGet`](./`catalog/licensePleskGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`licensePleskOptionsGet`](./`catalog/licensePleskOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`licenseSqlServerGet`](./`catalog/licenseSqlServerGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`licenseSqlServerOptionsGet`](./`catalog/licenseSqlServerOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`licenseWindowsGet`](./`catalog/licenseWindowsGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`licenseWindowsOptionsGet`](./`catalog/licenseWindowsOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`logsGet`](./`catalog/logsGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`logsOptionsGet`](./`catalog/logsOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`nashaGet`](./`catalog/nashaGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`nashaOptionsGet`](./`catalog/nashaOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`netappGet`](./`catalog/netappGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`netappOptionsGet`](./`catalog/netappOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`nutanixGet`](./`catalog/nutanixGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`nutanixOptionsGet`](./`catalog/nutanixOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`office365PrepaidGet`](./`catalog/office365PrepaidGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`office365PrepaidOptionsGet`](./`catalog/office365PrepaidOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`officePrepaidGet`](./`catalog/officePrepaidGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`officePrepaidOptionsGet`](./`catalog/officePrepaidOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`okmsGet`](./`catalog/okmsGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`okmsOptionsGet`](./`catalog/okmsOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`ovhCloudConnectGet`](./`catalog/ovhCloudConnectGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`ovhCloudConnectOptionsGet`](./`catalog/ovhCloudConnectOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`packsProfessionalServicesGet`](./`catalog/packsProfessionalServicesGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`packsProfessionalServicesOptionsGet`](./`catalog/packsProfessionalServicesOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`privateCloudEnterpriseGet`](./`catalog/privateCloudEnterpriseGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`privateCloudEnterpriseOptionsGet`](./`catalog/privateCloudEnterpriseOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`privateCloudGet`](./`catalog/privateCloudGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`privateCloudOptionsGet`](./`catalog/privateCloudOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`privateSQLGet`](./`catalog/privateSQLGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`privateSQLOptionsGet`](./`catalog/privateSQLOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`sslGatewayGet`](./`catalog/sslGatewayGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`sslGatewayOptionsGet`](./`catalog/sslGatewayOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`telephonyGet`](./`catalog/telephonyGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`telephonyOptionsGet`](./`catalog/telephonyOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`vmwareCloudDirectorBackupGet`](./`catalog/vmwareCloudDirectorBackupGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`vmwareCloudDirectorBackupOptionsGet`](./`catalog/vmwareCloudDirectorBackupOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`vmwareCloudDirectorGet`](./`catalog/vmwareCloudDirectorGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`vmwareCloudDirectorOptionsGet`](./`catalog/vmwareCloudDirectorOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`vpsGet`](./`catalog/vpsGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`vpsOptionsGet`](./`catalog/vpsOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`webHostingGet`](./`catalog/webHostingGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`webHostingOptionsGet`](./`catalog/webHostingOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`webPaaSGet`](./`catalog/webPaaSGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`webPaaSOptionsGet`](./`catalog/webPaaSOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |
| [`zimbraGet`](./`catalog/zimbraGet.ts`) | GET | `/order/catalog/public/{...}` | 1 |
| [`zimbraOptionsGet`](./`catalog/zimbraOptionsGet.ts`) | GET | `/order/catalog/public/{...}/options` | 1 |

### cloud

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`cloudProjectCreatePost`](./`cloud/cloudProjectCreatePost.ts`) | POST | `...` | 1 |
| [`cloudProjectGet`](./`cloud/cloudProjectGet.ts`) | GET | `/order/cloud/project/{...}` | 1 |
| [`cloudProjectListGet`](./`cloud/cloudProjectListGet.ts`) | GET | `...` | 1 |

### email

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|

### freefax

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`freefaxCreatePost`](./`freefax/freefaxCreatePost.ts`) | POST | `/order/freefax/{...}` | 1 |
| [`freefaxNumberGet`](./`freefax/freefaxNumberGet.ts`) | GET | `/order/freefax/{...}/{...}` | 1 |
| [`freefaxOrganizationListGet`](./`freefax/freefaxOrganizationListGet.ts`) | GET | `/order/freefax/{...}` | 1 |

### license

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|

### overTheBox

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`overTheBoxCreatePost`](./`overTheBox/overTheBoxCreatePost.ts`) | POST | `...` | 1 |
| [`overTheBoxDeviceGet`](./`overTheBox/overTheBoxDeviceGet.ts`) | GET | `/order/overTheBox/{...}` | 1 |
| [`overTheBoxGet`](./`overTheBox/overTheBoxGet.ts`) | GET | `/order/overTheBox/{...}` | 1 |
| [`overTheBoxListGet`](./`overTheBox/overTheBoxListGet.ts`) | GET | `...` | 1 |
| [`overTheBoxOrderCreatePost`](./`overTheBox/overTheBoxOrderCreatePost.ts`) | POST | `...` | 1 |

### saas

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`saasCsp2CreatePost`](./`saas/saasCsp2CreatePost.ts`) | POST | `...` | 1 |
| [`saasCsp2ListGet`](./`saas/saasCsp2ListGet.ts`) | GET | `...` | 1 |
| [`saasCsp2ProductGet`](./`saas/saasCsp2ProductGet.ts`) | GET | `/order/saas/csp2/{...}` | 1 |

### sms

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`smsCreatePost`](./`sms/smsCreatePost.ts`) | POST | `...` | 1 |
| [`smsListGet`](./`sms/smsListGet.ts`) | GET | `...` | 1 |
| [`smsProductCreatePost`](./`sms/smsProductCreatePost.ts`) | POST | `/order/sms/{...}` | 1 |
| [`smsProductDurationGet`](./`sms/smsProductDurationGet.ts`) | GET | `/order/sms/{...}/{...}` | 1 |
| [`smsProductGet`](./`sms/smsProductGet.ts`) | GET | `/order/sms/{...}` | 1 |

### veeamCloudConnect

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`veeamCloudConnectConfigCreatePost`](./`veeamCloudConnect/veeamCloudConnectConfigCreatePost.ts`) | POST | `/order/veeamCloudConnect/{...}` | 1 |
| [`veeamCloudConnectCreatePost`](./`veeamCloudConnect/veeamCloudConnectCreatePost.ts`) | POST | `...` | 1 |
| [`veeamCloudConnectGet`](./`veeamCloudConnect/veeamCloudConnectGet.ts`) | GET | `/order/veeamCloudConnect/{...}` | 1 |
| [`veeamCloudConnectListGet`](./`veeamCloudConnect/veeamCloudConnectListGet.ts`) | GET | `...` | 1 |
| [`veeamCloudConnectOptionCreatePost`](./`veeamCloudConnect/veeamCloudConnectOptionCreatePost.ts`) | POST | `/order/veeamCloudConnect/{...}/option` | 1 |

### vps

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|

### xdsl

| Operation | Method | Endpoint | Tests |
|-----------|--------|----------|-------|
| [`xdslSpareCreatePost`](./`xdsl/xdslSpareCreatePost.ts`) | POST | `...` | 1 |
| [`xdslSpareListGet`](./`xdsl/xdslSpareListGet.ts`) | GET | `...` | 1 |

**Total:** 168 operations, 166 tests
