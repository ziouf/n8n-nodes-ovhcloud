# OVH Cloud Ip — List Firewall Rules

> Opération `ipFirewallRuleListGet` · Fichier source : `nodes/OvhCloudIp/resources/firewall/ipFirewallRuleListGet.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/ip/{param}{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `ip` | string | Oui |
| `ipOnFirewall` | string | Oui |

## Filtres optionnels

| Paramètre n8n | Query param API | Type |
| --- | --- | --- |
| `filters.state` | `state` | options |

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
