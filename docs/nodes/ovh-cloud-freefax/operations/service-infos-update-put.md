# OVH Cloud Freefax — Update Service Information

> Opération `serviceInfosUpdatePut` · Fichier source : `nodes/OvhCloudFreefax/resources/serviceInfosUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/freefax/{param}` |

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
