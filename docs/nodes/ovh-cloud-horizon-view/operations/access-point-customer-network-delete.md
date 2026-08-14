# OVH Cloud Horizon View — Delete Customer Network From Access Point

> Opération `accessPointCustomerNetworkDelete` · Fichier source : `nodes/OvhCloudHorizonView/resources/accessPoint/accessPointCustomerNetworkDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/horizonView/{param}{param}{customerNetworkId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `accessPointId` | string | Oui |
| `customerNetworkId` | number | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
