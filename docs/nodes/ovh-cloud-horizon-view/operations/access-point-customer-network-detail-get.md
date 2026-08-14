# OVH Cloud Horizon View — Get Customer Network Properties From Access Point

> Opération `accessPointCustomerNetworkDetailGet` · Fichier source : `nodes/OvhCloudHorizonView/resources/accessPoint/accessPointCustomerNetworkDetailGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/horizonView/{param}{param}{customerNetworkId}` |

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
