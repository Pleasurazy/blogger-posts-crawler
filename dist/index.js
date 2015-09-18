!function(e,r){if("function"==typeof define&&define.amd)define("gulpEasyTaskBabelModuleId3872890",["exports","module","babel-runtime/regenerator","babel-runtime/core-js/promise","lodash","babel-runtime/helpers/interop-require-default","is-url","request-promise","./bloggerAPI"],r);else if("undefined"!=typeof exports&&"undefined"!=typeof module)r(exports,module,require("babel-runtime/regenerator"),require("babel-runtime/core-js/promise"),require("lodash"),require("babel-runtime/helpers/interop-require-default"),require("is-url"),require("request-promise"),require("./bloggerAPI"));else{var t={exports:{}};r(t.exports,t,e._regeneratorRuntime,e._Promise,e._,e._interopRequireDefault,e.isUrl,e.request,e.bloggers),e.gulpEasyTaskBabelModuleId3872890=t.exports}}(this,function(e,r,t,a,u,l,n,s,o){"use strict";function i(){var e,r,u,l,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return t["default"].async(function(s){for(;;)switch(s.prev=s.next){case 0:return n=d["default"].defaultsDeep({},n,{fetchAll:!1,key:null,url:null}),f["default"](n.url)||a["default"].reject('blogger-posts-crawler:findAll: expect first arg to be object and to have key "url"'),f["default"](n.key)||a["default"].reject('blogger-posts-crawler:findAll: expect first arg to be object and to have key "key"'),s.next=5,t["default"].awrap(p["default"].getByUrl({url:n.url,key:n.key}));case 5:return e=s.sent,r=e.id,s.next=9,t["default"].awrap(p["default"].getPostsList(r,{key:n.key}));case 9:u=s.sent;case 10:if(!n.fetchAll||!u.nextPageToken){s.next=18;break}return s.next=13,t["default"].awrap(p["default"].getPostsList(r,{pageToken:u.nextPageToken,key:n.key}));case 13:l=s.sent,u=u.concat(l),u.nextPageToken=l.nextPageToken,s.next=10;break;case 18:return s.abrupt("return",u);case 19:case"end":return s.stop()}},null,this)}var d=l["default"](u),f=l["default"](n),p=(l["default"](s),l["default"](o));r.exports={findAll:i}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImZhY3RvcnkiLCJkZWZpbmUiLCJhbWQiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsIm1vZCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJfUHJvbWlzZSIsIl8iLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwiaXNVcmwiLCJyZXF1ZXN0IiwiYmxvZ2dlcnMiLCJndWxwRWFzeVRhc2tCYWJlbE1vZHVsZUlkMzg3Mjg5MCIsInRoaXMiLCJfYmFiZWxSdW50aW1lUmVnZW5lcmF0b3IiLCJfYmFiZWxSdW50aW1lQ29yZUpzUHJvbWlzZSIsIl9sb2Rhc2giLCJfYmFiZWxSdW50aW1lSGVscGVyc0ludGVyb3BSZXF1aXJlRGVmYXVsdCIsIl9pc1VybCIsIl9yZXF1ZXN0UHJvbWlzZSIsIl9ibG9nZ2VyQVBJIiwiZmluZEFsbCIsIl9yZWYiLCJpZCIsInBvc3RzIiwibmV4dFBhZ2VQb3N0cyIsIm9wdHMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJhc3luYyIsImNvbnRleHQkMSQwIiwicHJldiIsIm5leHQiLCJfMiIsImRlZmF1bHRzRGVlcCIsImZldGNoQWxsIiwia2V5IiwidXJsIiwiX2lzVXJsMiIsInJlamVjdCIsImF3cmFwIiwiX2Jsb2dnZXJzIiwiZ2V0QnlVcmwiLCJzZW50IiwiZ2V0UG9zdHNMaXN0IiwibmV4dFBhZ2VUb2tlbiIsInBhZ2VUb2tlbiIsImNvbmNhdCIsImFicnVwdCIsInN0b3AiXSwibWFwcGluZ3MiOiJDQUFBLFNBQVdBLEVBQVFDLEdBQ2pCLEdBQXNCLGtCQUFYQyxTQUF5QkEsT0FBT0MsSUFDekNELE9BQU8sb0NBQXFDLFVBQVcsU0FBVSw0QkFBNkIsZ0NBQWlDLFNBQVUsZ0RBQWlELFNBQVUsa0JBQW1CLGdCQUFpQkQsT0FDbk8sSUFBdUIsbUJBQVpHLFVBQTZDLG1CQUFYQyxRQUNsREosRUFBUUcsUUFBU0MsT0FBUUMsUUFBUSw2QkFBOEJBLFFBQVEsaUNBQWtDQSxRQUFRLFVBQVdBLFFBQVEsaURBQWtEQSxRQUFRLFVBQVdBLFFBQVEsbUJBQW9CQSxRQUFRLHFCQUN4TyxDQUNMLEdBQUlDLElBQ0ZILFdBRUZILEdBQVFNLEVBQUlILFFBQVNHLEVBQUtQLEVBQU9RLG9CQUFxQlIsRUFBT1MsU0FBVVQsRUFBT1UsRUFBR1YsRUFBT1csdUJBQXdCWCxFQUFPWSxNQUFPWixFQUFPYSxRQUFTYixFQUFPYyxVQUNySmQsRUFBT2UsaUNBQW1DUixFQUFJSCxVQUUvQ1ksS0FBTSxTQUFVWixFQUFTQyxFQUFRWSxFQUEwQkMsRUFBNEJDLEVBQVNDLEVBQTJDQyxFQUFRQyxFQUFpQkMsR0FDckssWUFZRixTQUFlQyxLQW1CWCxHQUVJQyxHQVZEQyxFQUNEQyxFQUdFQyxFQWZlQyxFQUFJQyxVQUFBQyxRQUFBLEdBQUFDLFNBQUFGLFVBQUEsTUFBS0EsVUFBQSxFQXVCNUIsT0FBT2IsR0FBeUIsV0FBV2dCLE1BQU0sU0FBa0JDLEdBQ2pFLE9BQVUsT0FBUUEsRUFBWUMsS0FBT0QsRUFBWUUsTUFDL0MsSUFBSyxHQVlILE1BbkNSUCxHQUFPUSxFQUFBLFdBQUVDLGdCQUFpQlQsR0FDeEJVLFVBQVUsRUFDVkMsSUFBSyxLQUNMQyxJQUFLLE9BR0ZDLEVBQUEsV0FBTWIsRUFBS1ksTUFBTXZCLEVBQUEsV0FBUXlCLE9BQU8sc0ZBQ2hDRCxFQUFBLFdBQU1iLEVBQUtXLE1BQU10QixFQUFBLFdBQVF5QixPQUFPLHNGQTJCN0JULEVBQVlFLEtBQU8sRUFDWm5CLEVBQXlCLFdBQVcyQixNQTFCbENDLEVBQUEsV0FBU0MsVUFBV0wsSUFBS1osRUFBS1ksSUFBS0QsSUFBS1gsRUFBS1csTUE0QnhELEtBQUssR0FJSCxNQUhBZixHQUFPUyxFQUFZYSxLQTdCdEJyQixFQUFFRCxFQUFGQyxHQStCR1EsRUFBWUUsS0FBTyxFQUNabkIsRUFBeUIsV0FBVzJCLE1BL0JqQ0MsRUFBQSxXQUFTRyxhQUFhdEIsR0FBTWMsSUFBS1gsRUFBS1csTUFpQ2xELEtBQUssR0FqQ1BiLEVBQUtPLEVBQUFhLElBb0NILEtBQUssSUFDSCxJQW5DRGxCLEVBQUtVLFdBQVlaLEVBQU1zQixjQUFhLENBb0NqQ2YsRUFBWUUsS0FBTyxFQUNuQixPQUlGLE1BREFGLEdBQVlFLEtBQU8sR0FDWm5CLEVBQXlCLFdBQVcyQixNQXhDdkJDLEVBQUEsV0FBU0csYUFBYXRCLEdBQU13QixVQUFXdkIsRUFBTXNCLGNBQWVULElBQUtYLEVBQUtXLE1BMEM1RixLQUFLLElBMUNMWixFQUFhTSxFQUFBYSxLQUNqQnBCLEVBQVFBLEVBQU13QixPQUFPdkIsR0FDckJELEVBQU1zQixjQUFnQnJCLEVBQWNxQixjQTZDOUJmLEVBQVlFLEtBQU8sRUFDbkIsTUFFRixLQUFLLElBQ0gsTUFBT0YsR0FBWWtCLE9BQU8sU0E5QzNCekIsRUFnREQsS0FBSyxJQUNMLElBQUssTUFDSCxNQUFPTyxHQUFZbUIsU0FFdEIsS0FBTXJDLE1BbEZYLEdBQUlxQixHQUFTakIsRUFBMEMsV0FBWUQsR0FFL0R1QixFQUFjdEIsRUFBMEMsV0FBWUMsR0FJcEV3QixHQUZlekIsRUFBMEMsV0FBWUUsR0FFckRGLEVBQTBDLFdBQVlHLEdBK0UxRWxCLEdBQU9ELFNBbkRQb0IsUUFBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgaXNVcmwgZnJvbSAnaXMtdXJsJ1xuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdC1wcm9taXNlJ1xuaW1wb3J0IGJsb2dnZXJzIGZyb20gJy4vYmxvZ2dlckFQSSdcblxuLyoqXG5AbmFtZSBBcnRpY2xlXG5AaW50ZXJmYWNlXG5AcHJvcCB7c3RyaW5nW119IGFkZHJlc3NcbkBwcm9wIHtzdHJpbmd9IGJvZHkgLSBDb250ZW50IG9mIGFydGljbGVcbkBwcm9wIHtzdHJpbmd9IGNvdmVyIC0gR2VuZXJhbGx5IGZpcnN0IGVsZW1lbnQgb2YgQXJ0aWNsZS5pbWFnZXNcbkBwcm9wIHtzdHJpbmdbXX0gaW1hZ2VzIC0gQ29udGFpbiBVUkwgZm9ybWF0IGluIHRoZSBhcnJheS5cbkBwcm9wIHtzdHJpbmd9IHB1Ymxpc2hlZCAtIElTTzg2MDEgZm9ybWF0XG5AcHJvcCB7c3RyaW5nfSB0aXRsZVxuQHByb3Age3N0cmluZ30gdXJsXG4qL1xuXG4vKipcbkBuYW1lIGZpbmRBbGxcbkBwYXJhbSB7b2JqZWN0fSBvcHRpb25zXG5AcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmZldGNoQWxsPWZhbHNlXSAtIElmIHlvdSB3YW50IHRvIHJldHJpZXZlIGFsbCB0aGUgYXJ0aWNsZXMgZm9ybSBnb29nbGUuXG5AcGFyYW0ge3N0cmluZ30gb3B0aW9ucy51cmwgLSBVcmwgb2YgQmxvZ3Nwb3QuXG5AcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5rZXkgLSBTZXJ2ZXItc2lkZSBBUEkgYWNjZXNzIHRva2VuIGZyb20gR29vZ2xlIEJsb2dnZXIgQVBJLlxuQHJldHVybnMge0FydGljbGVbXX1cbiovXG5hc3luYyBmdW5jdGlvbiBmaW5kQWxsKG9wdHMgPSB7fSkge1xuXG4gIG9wdHMgPSBfLmRlZmF1bHRzRGVlcCh7fSwgb3B0cywge1xuICAgIGZldGNoQWxsOiBmYWxzZSxcbiAgICBrZXk6IG51bGwsXG4gICAgdXJsOiBudWxsLFxuICB9KVxuXG4gIGlmICghaXNVcmwob3B0cy51cmwpKSBQcm9taXNlLnJlamVjdCgnYmxvZ2dlci1wb3N0cy1jcmF3bGVyOmZpbmRBbGw6IGV4cGVjdCBmaXJzdCBhcmcgdG8gYmUgb2JqZWN0IGFuZCB0byBoYXZlIGtleSBcInVybFwiJylcbiAgaWYgKCFpc1VybChvcHRzLmtleSkpIFByb21pc2UucmVqZWN0KCdibG9nZ2VyLXBvc3RzLWNyYXdsZXI6ZmluZEFsbDogZXhwZWN0IGZpcnN0IGFyZyB0byBiZSBvYmplY3QgYW5kIHRvIGhhdmUga2V5IFwia2V5XCInKVxuXG4gIGxldCB7aWR9ID0gYXdhaXQgYmxvZ2dlcnMuZ2V0QnlVcmwoeyB1cmw6IG9wdHMudXJsLCBrZXk6IG9wdHMua2V5IH0pXG4gIGxldCBwb3N0cyA9IGF3YWl0IGJsb2dnZXJzLmdldFBvc3RzTGlzdChpZCwgeyBrZXk6IG9wdHMua2V5IH0pXG5cbiAgd2hpbGUgKG9wdHMuZmV0Y2hBbGwgJiYgcG9zdHMubmV4dFBhZ2VUb2tlbikge1xuICAgIGxldCBuZXh0UGFnZVBvc3RzID0gYXdhaXQgYmxvZ2dlcnMuZ2V0UG9zdHNMaXN0KGlkLCB7IHBhZ2VUb2tlbjogcG9zdHMubmV4dFBhZ2VUb2tlbiwga2V5OiBvcHRzLmtleSB9KVxuICAgIHBvc3RzID0gcG9zdHMuY29uY2F0KG5leHRQYWdlUG9zdHMpXG4gICAgcG9zdHMubmV4dFBhZ2VUb2tlbiA9IG5leHRQYWdlUG9zdHMubmV4dFBhZ2VUb2tlblxuICB9XG5cbiAgcmV0dXJuIHBvc3RzXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmluZEFsbFxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9