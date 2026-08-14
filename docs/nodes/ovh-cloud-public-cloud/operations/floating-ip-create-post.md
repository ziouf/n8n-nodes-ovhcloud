# OVH Cloud Public Cloud — floatingIpCreatePost

> Opération `floatingIpCreatePost` · Fichier source : `nodes/OvhCloudPublicCloud/region/floatingip/floatingIpCreatePost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/publicCloud/project/{projectId}{regionName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `regionName` | string | Oui |
| `ip` | string | — |
| `instanceId` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
