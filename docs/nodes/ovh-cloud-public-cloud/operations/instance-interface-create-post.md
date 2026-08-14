# OVH Cloud Public Cloud — instanceInterfaceCreatePost

> Opération `instanceInterfaceCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/instance/instanceInterfaceCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{instanceId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `instanceId` | string | Oui |
| `networkId` | string | Oui |
| `ip` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
