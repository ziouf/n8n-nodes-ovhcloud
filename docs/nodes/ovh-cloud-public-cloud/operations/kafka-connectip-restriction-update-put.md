# OVH Cloud Public Cloud — kafkaConnectipRestrictionUpdatePut

> Opération `kafkaConnectipRestrictionUpdatePut` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafkaConnect/ipRestrictionUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/cloud/project/{serviceName}{clusterId}{ipBlock}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `ipBlock` | string | Oui |
| `ip` | string | Oui |
| `description` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
