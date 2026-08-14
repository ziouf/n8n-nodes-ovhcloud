# OVH Cloud Public Cloud — kubeIpRestrictionsPost

> Opération `kubeIpRestrictionsPost` · Fichier source : `nodes/OvhCloudPublicCloud/kube/kubeIpRestrictionsPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/cloud/project/{serviceName}{kubeId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `kubeId` | string | Oui |
| `ip` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
