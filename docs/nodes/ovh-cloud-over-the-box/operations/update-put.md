# OVH Cloud Over The Box — Update OverTheBox Service

> Opération `updatePut` · Fichier source : `nodes/OvhCloudOverTheBox/resources/main/updatePut.operation.ts`

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
| `autoUpgrade` | boolean | — |
| `customerDescription` | string | — |
| `releaseChannel` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
