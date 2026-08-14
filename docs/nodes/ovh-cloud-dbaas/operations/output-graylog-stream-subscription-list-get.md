# OVH Cloud Dbaas — List Stream Subscriptions

> Opération `outputGraylogStreamSubscriptionListGet` · Fichier source : `nodes/OvhCloudDbaas/outputGraylogStream/outputGraylogStreamSubscriptionListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/dbaas/logs/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `streamId` | string | Oui |
| `resourceName` | string | — |
| `resourceType` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
