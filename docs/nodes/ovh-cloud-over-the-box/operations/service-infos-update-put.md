# OVH Cloud Over The Box — Update Service Information

> Opération `serviceInfosUpdatePut` · Fichier source : `nodes/OvhCloudOverTheBox/resources/main/serviceInfosUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/overTheBox/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `contactAdmin` | string | — |
| `contactBilling` | string | — |
| `contactTech` | string | — |
| `domain` | string | — |
| `engagedUpTo` | dateTime | — |
| `expiration` | dateTime | — |
| `possibleRenewPeriod` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
