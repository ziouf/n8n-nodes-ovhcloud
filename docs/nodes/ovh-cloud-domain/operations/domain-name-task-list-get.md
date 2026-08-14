# OVH Cloud Domain — List Tasks Related to a Domain Name Resource

> Opération `domainNameTaskListGet` · Fichier source : `nodes/OvhCloudDomain/resources/name/domainNameTaskListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/domain/name/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `domainName` | string | Oui |

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.function` | `function` | string |
| `filters.status` | `status` | options |
| `filters.type` | `type` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
