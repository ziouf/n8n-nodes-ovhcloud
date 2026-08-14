# OVH Cloud Public Cloud — kafkaUserAccessGet

> Opération `kafkaUserAccessGet` · Fichier source : `nodes/OvhCloudPublicCloud/database/kafka/userAccessGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/cloud/project/{serviceName}{clusterId}{userId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `clusterId` | string | Oui |
| `userId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
