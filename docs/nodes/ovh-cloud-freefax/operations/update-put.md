# OVH Cloud Freefax — Update Freefax

> Opération `updatePut` · Fichier source : `nodes/OvhCloudFreefax/resources/updatePut.operation.ts`

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
| `faxMaxCall` | number | Oui |
| `faxQuality` | options | — |
| `Best` | — | — |
| `Normal` | — | — |
| `faxTagLine` | string | — |
| `fromEmail` | string | — |
| `fromName` | string | — |
| `redirectionEmail` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
