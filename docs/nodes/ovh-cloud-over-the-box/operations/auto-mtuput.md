# OVH Cloud Over The Box — Update Auto MTU

> Opération `autoMTUPut` · Fichier source : `nodes/OvhCloudOverTheBox/resources/main/autoMTUPut.operation.ts`

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
| `mtuAuto` | options | Oui |
| `Disabled` | — | — |
| `Enabled` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
