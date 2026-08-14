# OVH Cloud Public Cloud — Reset Admin Credentials

> Opération `rancherAdminCredentialsReset` · Fichier source : `nodes/OvhCloudPublicCloud/rancher/adminCredentials.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/publicCloud/project/{projectId}{rancherServiceId}` |
| POST | `/publicCloud/project/{projectId}{rancherServiceId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `rancherServiceId` | resourceLocator | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
