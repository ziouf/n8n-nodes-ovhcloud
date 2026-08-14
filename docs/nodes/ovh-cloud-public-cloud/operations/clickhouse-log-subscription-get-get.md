# OVH Cloud Public Cloud — clickhouseLogSubscriptionGetGet

> Opération `clickhouseLogSubscriptionGetGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/clickhouse/logSubscriptionGetGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{subscriptionId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `subscriptionId` | string | Oui |
| `clusterId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
