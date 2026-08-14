# OVH Cloud Public Cloud — instanceInterfaceDeleteDelete

> Opération `instanceInterfaceDeleteDelete` · Fichier source : `nodes/OvhCloudPublicCloud/instance/instanceInterfaceDeleteDelete.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| DELETE | `/cloud/project/{serviceName}{instanceId}{interfaceId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `publicCloudProjectId` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `instanceId` | string | Oui |
| `interfaceId` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
