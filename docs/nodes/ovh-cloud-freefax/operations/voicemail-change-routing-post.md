# OVH Cloud Freefax — Change Voicemail Routing

> Opération `voicemailChangeRoutingPost` · Fichier source : `nodes/OvhCloudFreefax/resources/voicemailChangeRoutingPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/freefax/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `routing` | options | Oui |
| `Fax` | — | — |
| `Voicemail` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
